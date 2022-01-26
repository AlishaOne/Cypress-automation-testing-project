export default function getDateAndTime() {
    const yearOptions = { month: '2-digit', day: '2-digit', year: 'numeric' }
    const timeOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
    let dateYear = new Date(Date.now()).toLocaleString('en-US', yearOptions)
    let dateTime = new Date(Date.now()).toLocaleTimeString('en-US', timeOptions)

    return { dateYear, dateTime }
}