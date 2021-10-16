/* 
Index types allow us to create objects which are more flexible regarding the properties they might hold.
*/

interface FlatJSON {
  [key: string]: string;
}

interface ErrorContainer {
  id: string;
  [key: string]: string;
}
