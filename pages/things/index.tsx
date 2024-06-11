import { ReactNode } from "react";
import React from "react";
import style from "../../styles/things.module.css"
import { title } from "process";
import trackSpikes from "../../public/trackSpikes.jpeg";
import code from "../../public/codeimage.png";
import Image from "next/image";
import clsx from "clsx";
import { reverse } from "dns";

interface Props {
    children: JSX.Element[] | JSX.Element
}

export default function things() {
    return (
        <div className={style.container}>
            <h1>Blog... Maybe... probably</h1>

            <Blogitem reverse={true}>
                {
                    <div className={style.content__container}>
                        <Image width={300} height={250} src={trackSpikes} alt="spikes" />
                        <div>
                            <h3>2022/2023 Track and field season review</h3>
                            <p>Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire-breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower. For her true love and true love's first kiss.</p>
                        </div>
                    </div>
                }
            </Blogitem>

            <Blogitem reverse={false}>
                {
                    <div className={style.content__container}>
                        <Image width={300} src={code} alt="spikes" className={style.image} />
                        <div >
                            <h3>Year review as a developer</h3>
                            <p>Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire-breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower. For her true love and true love's first kiss.</p>
                        </div>
                    </div>
                }
            </Blogitem>
        </div>
    )
}

const Blogitem = (props: { children: ReactNode, reverse: boolean }) => {
    return (
        <div className={clsx(style.blogContainer)}>
            {props.children}
        </div>
    );
}