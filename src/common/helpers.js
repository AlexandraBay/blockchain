export function formatBytes(a, b) {
    if (0 === a) return "0 Bytes";
    let c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

export function getDate(time) {
    const blcokTime = new Date(time*1000)

    let data = blcokTime.toLocaleDateString()
    let timeStr = blcokTime.toLocaleTimeString('en-GB')

    return `${data} ${timeStr}`
}

export function getTime(time) {
    let today = new Date()
    let dateBlock = new Date(time*1000)
    let diffMs = ( today - dateBlock )
    let diffDays = Math.floor(diffMs / 86400000)
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000)
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)

    diffDays = (diffDays > 0) ? diffDays + 'd ' : ''
    diffHrs = (diffHrs > 0) ? diffHrs + 'h ' : ''

    return `${diffDays}${diffHrs}${diffMins}min`
}