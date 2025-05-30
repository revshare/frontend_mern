import { useWorkoutsContext } from '../hooks/useWorkoutContext'

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/' + workout._id , {
            method : 'DELETE'
        })

        const json = await response.json()  

        if(response.ok){
            console.log(' Workout deleted',json)
            dispatch({type:'DELETE_WORKOUT', payload: json})
        }

    }

    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load} </p>
            <p><strong>Reps : </strong> {workout.reps} </p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails