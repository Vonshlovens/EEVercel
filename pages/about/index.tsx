import styles from "../../styles/about.module.css"
import Logo from "../../public/Photo.jpg"
import Image from 'next/image'
import clsx from "clsx"

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.bio_container}>
                <div className={styles.image}>
                    <Image src={Logo} alt='hi' height={400} width={280} className={styles.photo} />
                </div>
                <p className={styles.about}>
                    Hi, I'm Jordan!
                    <br />
                    <br />
                    I am a software developer based in Melbourne, VIC, Australia. In January 2022, I made the decision to move  from my hometown of Calgary, Alberta, Canada, to accompany my partner on her three-year trip to Australia while she completes her post-graduate degree. I am excited to explore new opportunities in this vibrant city and further develop my skills in the field.
                    <br />
                    <br />
                    During my Bachelor's degree at the University of Calgary, I pursued Economics as my major. However, a single class in Computer Science opened my eyes to the potential of programming, inspiring me to complete a minor in the field. After graduation, I realized that I wanted to enhance my programming skills and decided to pursue a career in software development. It is this drive that led me to my current role as a developer at Revium, where I utilize my programming to create innovative solutions for clients.
                </p>
            </div>
            <div>
                <hr />
                <div className={styles.experience_title}>
                    <div className={styles.title}>
                        <h4 >Tech Stack</h4>
                        <div className={styles.languages}>
                            <div className={clsx(styles.tech, styles.one)}>C#</div>
                            <div className={clsx(styles.tech, styles.one)}>.NET Core</div>
                            <div className={clsx(styles.tech, styles.one)}>.NET Framework</div>
                            <div className={clsx(styles.tech, styles.one)}>REST API</div>
                            <div className={clsx(styles.tech, styles.one)}>Blazor</div>
                            <div className={clsx(styles.tech, styles.one)}>SQL</div>
                            <div className={clsx(styles.tech, styles.one)}>CSS</div>
                            <div className={clsx(styles.tech, styles.one)}>Git</div>
                            <div className={clsx(styles.tech, styles.one)}>Azure</div>
                            <div className={clsx(styles.tech, styles.one)}>Java</div>
                            <div className={clsx(styles.tech, styles.two)}>TypeScript</div>
                            <div className={clsx(styles.tech, styles.two)}>React</div>
                            <div className={clsx(styles.tech, styles.two)}>Node.js</div>
                            <div className={clsx(styles.tech, styles.two)}>AI</div>
                            <div className={clsx(styles.tech, styles.three)}>Rust</div>
                            <div className={clsx(styles.tech, styles.three)}>Azure AI Development</div>
                        </div>
                        <div className={clsx(styles.tech, styles.Proficient)}>Proficient</div>
                        <div className={clsx(styles.tech, styles.Competent)}>Competent</div>
                        <div className={clsx(styles.tech, styles.learning)}>Currently Learning</div>
                    </div>
                    <div>
                        <h1 className={styles.title}>Experience</h1>
                        <div className={styles.experience}>
                            <h3>Revium | .Net Developer <br /><small>July 2023 - present</small></h3>
                            <ul>
                                <li>
                                    A primarily backend role spread across multiple clients and teams which deal with the digital agency.
                                </li>
                                <li>
                                    Technoligies: .Net Core, .Net Framework, Blazor, Entity Framework Core, MVC, SQL. Microsoft Azure B2C. Open AI API 
                                </li>
                                <li>
                                    .Net REST API's, Blazor server projects, .Net Framework MVC, .Net Core.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.experience}>
                            <h3>SafeCode | Software Developer<br /><small>April 2022 - July 2023</small></h3>
                            <ul>
                                <li>
                                    Full-stack role involving the development and maintenance of web applications, utilizing the .NET.
                                </li>
                                <li>
                                    Frameworks: .Net Core, Blazor, Entity Framework Core, MVC etc.
                                </li>
                                <li>
                                    Communicate and collaborate with multi-disciplinary teams of engineers, designers,
                                    producers, and clients daily.
                                </li>
                                <li>
                                    Utilized Microsoft Azure for cloud-based deployment and hosting of web applications, while effectively leveraging Git version control
                                </li>
                            </ul>
                        </div>
                        <div className={styles.experience}>
                            <h3>LeasePlus | Customer Support<br /><small>February 2022 - April 2022 </small></h3>
                            <ul>
                                <li>
                                    Acted as the primary point of contact for customers, ensuring their concerns were heard and addressed in a timely manner.
                                </li>
                                <li>
                                    Maintained comprehensive records of customer interactions, inquiries, and resolutions in the customer support system.
                                </li>
                                <li>
                                    Collaborated with internal teams, such as technical support or sales, to facilitate prompt and efficient resolutions for complex customer cases.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h3>YMCA | Duty Manager<br /><small>September 2021 - January 2022</small></h3>
                            <ul>
                                <li>
                                    Ensure exceptional customer service by addressing inquiries, resolving complaints, and handling any issues or conflicts that may arise. Strive to create a welcoming and inclusive environment for all members and guests.
                                </li>
                                <li>
                                    A first responder to all first aid situations in the facility, including those involving ambulances and the fire department.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h3>MRU Kids | Camp Leader<br /><small>May 2019 - August 2019</small></h3>
                            <ul>
                                <li>
                                    Supervised a group of children ranging in size from 15-20 children, lead them through a wide range of engaging sports activities, games, and swimming sessions.
                                </li>
                                <li>
                                    Thoughtfully catered to children who were unfamiliar with English or had learning difficulties by providing appropriate accommodations and support during camp activities.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h3>Foundation Building Materials | Customer Service/Product Delivery<br /><small>May 2020 - August 2020</small></h3>
                            <ul>
                                <li>
                                    Operated and maneuvered heavy machinery, specifically forklifts and drywall delivery trucks, with precision and safety protocols in mind.
                                </li>
                                <li>
                                    Oversaw the operation of a stucco tinting facility where we would exceed the expectations.
                                </li>
                                <li>
                                    Received and processed advanced orders from customers, ensuring accurate completion and timely delivery of their requested items.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}