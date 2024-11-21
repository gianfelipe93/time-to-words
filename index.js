// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === "12:00") {
    return "midday"
  }

  const hour = time.split(':')[0]
  const minutes = time.split(':')[1]

  const map = getNumberToTextMap();
  const hourAsText = map.get(hour);

  if (minutes === "00") {
    return `${hourAsText} o'clock`
  }

  const minAsNumber = parseInt(minutes)
  const minToText = map.get(minutes)

  if (minAsNumber < 30) {
    return `${minToText} past ${hourAsText}`
  } else if (minAsNumber > 30) {
    const timeDiffence = getTimeDifference(minAsNumber)

    const nextHour = parseInt(hour) + 1;
    const nextHourAsText = map.get(`${nextHour}`)

    return `${timeDiffence} to ${nextHourAsText}`
  }

  return 'half past eight';
}

const isQuarter = (n) => {
  return n === 15 || n === 45
}

const getTimeDifference = (n) => {
  return 60 - n
}


const getNumberToTextMap = () => {
  const map = new Map([
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
    ["4", "four"],
    ["5", "five"],
    ["6", "six"],
    ["7", "seven"],
    ["8", "eight"],
    ["9", "nine"],
    ["10", "ten"],
    ["11", "eleven"],
    ["12", "twelve"],
    ["13", "thirteen"],
    ["14", "fourteen"],
    ["15", "quarter"],
    ["16", "sixteen"],
    ["17", "seventeen"],
    ["18", "eighteen"],
    ["19", "nineteen"],
    ["20", "twenty"],
    ["21", "twenty one"],
    ["22", "twenty two"],
    ["23", "twenty three"],
    ["24", "twenty four"],
    ["25", "twenty five"],
    ["26", "twenty six"],
    ["27", "twenty seven"],
    ["28", "twenty eight"],
    ["29", "twenty nine"],
    ["30", "thirty"]]
  );

  return map
}

module.exports = { convertTimeToWords };