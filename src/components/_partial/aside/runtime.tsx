import moment from "moment";

function AsideRuntime() {
    const startDate = moment('2025-02-03').format('YYYY-MM-DD');
    const curreDate = moment().format('YYYY-MM-DD');

    // const years = moment(curreDate).diff(startDate, 'years');
    const days = moment(curreDate).diff(startDate, 'days');

    return (
        <>
            <div className=''>{days + '天'}</div>
        </>
    )
}

export default AsideRuntime;
