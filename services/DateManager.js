class DateManager {
  format(date, howToFormat, numberToCalculate) {
    date = new Date(date);

    if (howToFormat === "addDay") {
      return new Date(date.setDate(date.getDate() + numberToCalculate));
    }

    if (howToFormat === "subtractDay") {
      return new Date(date.setDate(date.getDate() - numberToCalculate));
    }

    if (howToFormat === "addMonth") {
      return new Date(date.setMonth(date.getMonth() + numberToCalculate));
    }

    if (howToFormat === "subtractMonth") {
      return new Date(date.setMonth(date.getMonth() - numberToCalculate));
    }

    if (howToFormat === "addYear") {
      return new Date(date.setYear(date.getFullYear() + numberToCalculate));
    }

    if (howToFormat === "subtractYear") {
      return new Date(date.setYear(date.getFullYear() - numberToCalculate));
    }

    if (howToFormat === "mm/dd/yyyy") {
      return date.toLocaleDateString();
    }

    if (howToFormat === "mm-dd-yyyy") {
      return date.toLocaleDateString().replaceAll("/", "-");
    }

    if (howToFormat === "mm/dd/yy") {
      const datesArray = date.toLocaleDateString().split("/");
      const year = datesArray[2];

      return `${datesArray[0]}/${datesArray[1]}/${year[2]}${year[3]}`;
    }

    if (howToFormat === "mm-dd-yy") {
      const datesArray = date.toLocaleDateString().split("/");
      const year = datesArray[2];

      return `${datesArray[0]}-${datesArray[1]}-${year[2]}${year[3]}`;
    }
  }
}

export default new DateManager();
