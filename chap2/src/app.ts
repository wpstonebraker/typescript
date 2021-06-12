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
  constructor(id: string, private reports: string[]) {
    super(id, "ACCOUNTING");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("69", ["Dad"]);

it.addEmployee("Dad");
it.addEmployee("Mom");

it.printEmployeeInformation();
it.describe();

console.log(it);

const acct = new AccountingDepartment("d2", []);

acct.addReport("nooo");

acct.printReports();
