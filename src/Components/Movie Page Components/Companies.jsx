import React from 'react';
import Company from '../Cast Components/Company';

const Companies = () => {
    let Companies=[
         {
            id: 0,
            Name: "My Company 1",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 1,
            Name: "My Company 1",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 2,
            Name: "My Company 2",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 3,
            Name: "My Company 3",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 3,
            Name: "My Company 3",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 4,
            Name: "My Company 4",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 5,
            Name: "My Company 5",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 6,
            Name: "My Company 6",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 7,
            Name: "My Company 7",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 8,
            Name: "My Company 8",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
         {
            id: 9,
            Name: "My Company 9",
            imgURL: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740"
        },
    ];
    let ClassName={
         Container: "w-full flex gap-8 flex-wrap"
    };
    return (
        <div className={ClassName.Container}>
            {Companies.map((item)=>(
                <Company id={item.id} imgURL={item.imgURL} Name={item.Name}></Company>
            ))}
        </div>
    );
}

export default Companies;
