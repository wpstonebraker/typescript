class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  // changeId(newId: string) {
  //   this.id = newId;
  // }
  static createEmployee(name: string) {
    return { name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "ACCOUNTING");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      // if (this.instance) { //  either is fine
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee = Department.createEmployee("dad");
console.log(employee);

const it = new ITDepartment("69", ["Dad"]);

it.addEmployee("Dad");
it.addEmployee("Mom");

it.printEmployeeInformation();
it.describe();

console.log(it);

// const acct = new AccountingDepartment("d2", []);
const acct = AccountingDepartment.getInstance();

acct.mostRecentReport = "wow";
// console.log(acct.mostRecentReport);
acct.addReport("nooo");
console.log(acct.mostRecentReport);

acct.printReports();
