import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch('https://react-portfolio-a914d-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    ).then(() => {
      history.replace('/');
    });
  }
    return ( 
        <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;