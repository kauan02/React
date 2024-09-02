import Style from './Watch.module.scss'

export default function Watch() {
    return (
        <>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchDivision}>:</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchNumber}>0</span>
        </>
    )
}