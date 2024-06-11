import React, { FormEvent, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import styles from "../../styles/points.module.css";
import {Category, GenderArr, OutdoorEvents, IndoorEvents} from  "../../data/constants.ts";
import CategoryClass from "@/data/types/Category.ts";
import EventClass from "@/data/types/Event.ts";
import GenderClass from "@/data/types/Gender.ts";
import PerformanceClass from "@/data/types/Performance.ts";
import { findPerformance, findPoints } from "@/data/Logic/calculations.ts";

export default function PointsCalculator() {
    useEffect(() => {
    }, [])

    const [gender, setGender] = useState<GenderClass[]>([]);
    const [event, setEvent] = useState<EventClass[]>([]);
    const [category, setCategory] = useState<CategoryClass[]>([{ Value: 1, Name: "Outdoor" }]);
    const [calcPoints, setCalcPoints] = useState<boolean>(true)
    const [points, setPoints] = useState<number | null>();
    const [totals, updateTotalArray] = useState<PerformanceClass[]>([]);

    const CalculateTotal = async (formEvent: FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        var perf: PerformanceClass = { Gender: "Undefined", Points: 0, Event: "Undefined", Mark: 0, MarkTime: "Undefined", Category: "Undefined", ID:""};

        const formData = new FormData(formEvent.currentTarget)
        try {

            var genderForm = formData.get("Gender") + "";
            var categoryForm = formData.get("Category") + "";
            var eventForm = formData.get("Event") + "";

            if (calcPoints) { //caclulate the points based on the performance 
                var hour: number =  Number(formData.get("h") ?? 0 )  * 3600;
                var minutes: number = Number(formData.get("m") ?? 0 )  * 60;
                var seconds: number = Number(formData.get("s") ?? 0 ) ;
                var milliseconds: number = Number(formData.get("ms") ?? 0 ) / 100;
                var totalTime: number = hour + minutes + seconds + milliseconds;
                perf = findPoints(totalTime, genderForm, categoryForm, eventForm);
            } else { //calculate the performance based on the points
                if (points != undefined) {
                    if (points <= 1400 && points >= 0) {
                        perf = findPerformance(points, genderForm, categoryForm, eventForm);
                    }
                }
            }
            updateTotalArray((oldarray) => [...oldarray, perf]);
        } catch {
            console.log("There was an error find the performance")
        }
    }

    useEffect(() => {
        setCalcPoints(true);
    }, []);

    const handleRemoveItem = (e: PerformanceClass) => {
        updateTotalArray((prevTotals) => prevTotals.filter((item) => item.ID !== e.ID));
      };
      

    const handleChangeRadio = (value: any) => {
        setCalcPoints(value);
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pointContainer}>

                <h2 id={styles.title}>World Athletics Points Calculator</h2>

                <p>
                    This calculator is used to compare the performances of different events. Not to be used for comparing mens and
                    womens events.
                    <br />
                    <br />
                    Data is based off of the most recent 2023 points <a target="_blank" rel="noopener noreferrer" href="../PointsTable.pdf">table</a> released by World Athletics. The
                    json file containing the all performances can be downloaded <a target="_blank" rel="noopener noreferrer" href="../WorldAthletics.json">here. </a>
                    Performances adjust via wind use the formulas from this <a target="_blank" rel="noopener noreferrer" href="https://www.tandfonline.com/doi/full/10.1080/17461391.2018.1480062">paper.</a>
                </p>
                <form onSubmit={CalculateTotal}>
                    <div className={styles.calculate}>
                        <div className={styles.dropdown}>
                            <div className={styles.eventSelector}>
                                <h4>Category</h4>
                                <Select options={Category} labelField="Name" name="Category" placeholder="Category" valueField="Value" onChange={(e) => setCategory(e)} values={[]} className={styles.select} />
                            </div>
                            <div className={styles.eventSelector}>
                                <h4>Gender</h4>
                                <Select options={GenderArr} labelField="Name" name="Gender" placeholder="Gender" valueField="Value" onChange={(e) => setGender(e)} values={[]} className={styles.select} />
                            </div>
                            <div className={styles.eventSelector}>
                                <h4>Event</h4>
                                <Select options={category[0].Name == "Outdoor" ? OutdoorEvents : IndoorEvents} name="Event" labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} values={[]} className={styles.select} />
                            </div>
                        </div>
                        <div className={styles.dropdown}>

                            <div className={styles.inputs_times}>
                                <input type="radio" value={true + ""} id="performance" onChange={() => handleChangeRadio(true)} name="calc" defaultChecked={true} className={styles.radio} />
                                <label className={styles.input}>
                                    <input className={styles.input__field} id={styles.time} type="text" name="h"
                                        disabled={!calcPoints} step="0.001" maxLength={2} max={100}/>
                                    <span className={styles.input__label}>Hours</span>
                                </label>
                                <label className={styles.input}>
                                    <input className={styles.input__field} id={styles.time} type="text" name="m"
                                        disabled={!calcPoints} step="0.001" maxLength={2} max={59}/>
                                    <span className={styles.input__label}>Minutes</span>
                                </label>
                                <label className={styles.input}>
                                    <input className={styles.input__field} id={styles.time} type="text" name="s"
                                        disabled={!calcPoints} step="0.001" maxLength={2} max={59}/>
                                    <span className={styles.input__label}>Seconds</span>
                                </label>
                                <label className={styles.input}>
                                    <input className={styles.input__field} id={styles.time} type="text" name="ms"
                                        disabled={!calcPoints} step="0.001" maxLength={2} max={99}/>
                                    <span className={styles.input__label}>Milliseconds</span>
                                </label>
                            </div>
                            <div className={styles.inputs} >
                                <input type="radio" value={false + ""} id="points" onChange={() => handleChangeRadio(false)} name="calc" className={styles.radio} />
                                <label className={styles.input}>
                                    <input className={styles.input__field} placeholder=""
                                        type="text" onChange={(e) => setPoints(Number(e.target.value))} disabled={calcPoints} max={1400} min={0}/>
                                    <span className={styles.input__label}>Points (0 - 1400)</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.calculateButton}
                            >Calculate</button>
                        </div>
                    </div>
                </form>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Score</th>
                            <th>Mark</th>
                            <th>Gender</th>
                            <th>Wind Adjust</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {totals.map((item, key) =>
                            <PerformanceRow performance={item} key={key} handleRemoveItem={handleRemoveItem} />
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const PerformanceRow = (props: any, calc = false) => {
    const [performance, setPerformance] = useState(props.performance);
    const [Time, setTime] = useState<number>(0);
    const [calculate, setcalculate] = useState<boolean>(calc);

    const CalculteWindTime = (wind: number) => {
        var time = performance.Event == "100m" ? performance.Mark - (0.0449 * wind) + (0.009459 * performance.Mark * wind) - (0.0042 * wind * wind) :
        performance.Event == "200m" ? performance.Mark + (0.090 * wind) - (0.010 * wind * wind) :
        performance.Event == ("110mH" || "100mH") ? performance.Mark + (0.093 * wind) - (0.010 * wind * wind) :
        performance.Event == "LJ" ? performance.Mark - (0.029 * wind) :
                        performance.Event == "TJ" ? performance.Mark + (0.069 * wind) - (0.009 * wind * wind) :
                            performance.Mark;
        setcalculate(true);
        setTime(time.toFixed(2));
    }

    return (
        <tr key={props} className={styles.row}>
            <td>{performance.Event}</td>
            <td>{performance.Points}</td>
            <td>{
                Time != 0 ? Time : performance.Mark}</td>
            <td>{performance.Gender}</td>
            <td>
                {
                    performance.Event === "100m" ||
                        performance.Event === "200m" ||
                        performance.Event === "110mH" ||
                        performance.Event === "100mH" ||
                        performance.Event === "LJ" ||
                        performance.Event === "TJ" ?
                        <input type="number" onChange={(e) => CalculteWindTime(Number(e.target.value))} className={styles.input__field} /> :
                        <></>
                }
            </td>
            <td onClick={() => props.handleRemoveItem(performance)} className={styles.remove}>Remove</td>
        </tr>
    );
}



