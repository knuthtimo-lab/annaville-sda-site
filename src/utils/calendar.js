
export function googleCalendarUrl({ title, details, location, start, end }){
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details,
    location,
    dates: `${formatDate(start)}/${formatDate(end)}`
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadICS({ title, details, location, start, end, filename='event.ics' }){
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Annaville SDA Church//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(details || '')}`,
    `LOCATION:${escapeICS(location || '')}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

function formatDate(date){
  const pad = n => String(n).padStart(2, '0')
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth()+1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}00Z`
}
function escapeICS(text){
  return text.replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n')
}
