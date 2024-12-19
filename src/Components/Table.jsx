import React from 'react'

const Table = ({ students }) => {
    console.log(students)
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => {
                        return (
                            <tr key={ index } >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.rollNum}</td>
                            </tr>
                        )})}
            </tbody>
        </table>
    </>
  )
}

export default Table