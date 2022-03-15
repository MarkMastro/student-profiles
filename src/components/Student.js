
export default function Student(props){
    const {
        city,
        company,
        email,
        firstName,
        grades,
        id,
        lastName,
        pic,
        skill
    } = props;
    const avg = grades.reduce((a,b) => (a+b)) / grades.length;
    return(
        <>
            <img src={pic} alt="Student"/>
            <h2>{firstName} {lastName}</h2> 
            <h2>Email: {email}</h2>
            <h2>Company: {company}</h2>
            <h2>Skill: {skill}</h2>
            <h2>Average: {avg} </h2>
        </>


    )

}
