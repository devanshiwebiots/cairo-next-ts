import { ImagePath } from "@/Constant";
import { DeleteRowDataProp } from "@/Types/TableType";
import Image from "next/image";
import { Fragment } from "react";

export const CustomFilteringList = [
  {
    text: "This example shows a search being performed on the age column in the data, based upon two inputs.",
  },
];

export const FilteringTableData = [
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Airi Satou
      </Fragment>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    startDate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/11.png`} alt="user image" width={32} height={32}/>
        Ashton Cox
      </Fragment>
    ),
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    startDate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Bradley Greer
      </Fragment>
    ),
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Brenden Wagner
      </Fragment>
    ),
    position: "Software Engineer",
    office: "London",
    age: 41,
    startDate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Brielle Williamson
      </Fragment>
    ),
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Bruno Nash
      </Fragment>
    ),
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Caesar Vance
      </Fragment>
    ),
    position: "Software Engineer",
    office: "London",
    age: 38,
    startDate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Cara Stevens
      </Fragment>
    ),
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/3.png`} alt="user image" width={32} height={32}/>
        Cedric Kelly
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    startDate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Cedric Kelly
      </Fragment>
    ),
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
  },

  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Charde Marshall
      </Fragment>
    ),
    position: "Regional Director",
    office: "San Francisco",
    age: 36,
    startDate: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Colleen Hurst
      </Fragment>
    ),
    position: "Javascript Developer",
    office: "San Francisco",
    age: 39,
    startDate: "2009/09/15",
    salary: "$205,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Dai Rios
      </Fragment>
    ),
    position: "Personnel Lead",
    office: "Edinburgh",
    age: 35,
    startDate: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Donna Snider
      </Fragment>
    ),
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Doris Wilder
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Finn Camacho
      </Fragment>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Fiona Green
      </Fragment>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Garrett Winters
      </Fragment>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Cortez
      </Fragment>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Joyce
      </Fragment>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gloria Little
      </Fragment>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Haley Kennedy
      </Fragment>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Hermione Butler
      </Fragment>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Herrod Chandler
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Hope Fuentes
      </Fragment>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Howard Hatfield
      </Fragment>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jackson Bradshaw
      </Fragment>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jena Gaines
      </Fragment>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jenette Caldwell
      </Fragment>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Doris Wilder
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Finn Camacho
      </Fragment>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Fiona Green
      </Fragment>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Garrett Winters
      </Fragment>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Cortez
      </Fragment>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Joyce
      </Fragment>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gloria Little
      </Fragment>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Haley Kennedy
      </Fragment>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Hermione Butler
      </Fragment>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Herrod Chandler
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Hope Fuentes
      </Fragment>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Howard Hatfield
      </Fragment>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jackson Bradshaw
      </Fragment>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jena Gaines
      </Fragment>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Jenette Caldwell
      </Fragment>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Doris Wilder
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Finn Camacho
      </Fragment>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Fiona Green
      </Fragment>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Garrett Winters
      </Fragment>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Cortez
      </Fragment>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Gavin Joyce
      </Fragment>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Tiger Nixon
      </Fragment>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Timothy Mooney
      </Fragment>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Unity Butler
      </Fragment>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Vivian Harrell
      </Fragment>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Yuri Berry
      </Fragment>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Zenaida Frank
      </Fragment>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <Fragment>
        <Image className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" width={32} height={32}/>
        Zorita Serrano
      </Fragment>
    ),
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    age: 43,
    startDate: "2013/02/01",
    salary: "$75,650",
  },
];

export const FilteringTableColumn = [
  {
    name: "Employee Name",
    cell: (row: DeleteRowDataProp) => row["name"],
    sortable: true,
  },
  {
    name: "position",
    selector: (row: DeleteRowDataProp) => row["position"],
    sortable: true,
  },
  {
    name: "office",
    selector: (row: DeleteRowDataProp) => row["office"],
    sortable: true,
  },
  {
    name: "age",
    selector: (row: DeleteRowDataProp) => row["age"],
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row: DeleteRowDataProp) => row["startDate"],
    sortable: true,
  },
  {
    name: "salary",
    selector: (row: DeleteRowDataProp) => row["salary"],
    sortable: true,
  },
];
