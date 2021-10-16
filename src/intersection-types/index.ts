/** 
 * can also be replaced with interfaces. Implementation below
 * @intersection_types
 */
type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
    name: 'emp1',
    priviliges: ['admin', 'employee'],
    startDate: new Date()
}

console.log(elevatedEmployee);

// -- //

interface IAdmin {
    name: string
    priviliges: string[]
}

interface IEmployee {
    name: string
    startDate: Date
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

const ielevatedEmployee: IElevatedEmployee = {
    name: 'Iemp1',
    priviliges: ['Iadmin', 'Iemployee'],
    startDate: new Date()
}

console.log(ielevatedEmployee);

// -- //

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

/*
Intersection types :-
- In the case of a union type, that is basically the types they have in common.
- In the case of object types, it's simply the combination of these object properties, so to say.
*/
