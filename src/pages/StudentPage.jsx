import { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:3000/student"
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch data");
                }

                const data = await response.json();
                setStudents(data);

            } catch (e) {
                console.log(e.message);
            }
        };

        getData();
    }, []);

    return (
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    );
};

export default StudentPage;