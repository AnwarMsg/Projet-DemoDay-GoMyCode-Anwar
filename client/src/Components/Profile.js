import '../css/profile.css'
import useAxios from '../hooks/useAxios';
import Description from '../hooks/categories.json'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCategory, setScore } from '../Redux/Reducers/QuizReducer';

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { response, error, loading} = useAxios({ url: "/api_category.php" })
    if(loading) {
        return (
            <div>
                <section id="cate">
                    <h2>Please wait for a moment ...</h2>
                </section>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <section id="cate">
                    <h2>Oops ! Something went wrong, try again later .</h2>
                </section>
            </div>
        )
    }
  return (
    <div>
        <section id="cate">
            <h2>Categories</h2>
            <p className='ml'> Discover Our large panel of categories to test yourself.</p>
            <div className='box-container'>
                {response.trivia_categories.map(({id, name}) => (
                    <div className='box' key={id}>
                        <div className='category-content'>
                            <h3>{name}</h3>                
                            {Description.filter(desc => desc.id === id).map(filteredDesc => (
                                <p key={filteredDesc.id}>{filteredDesc.content}</p>
                            ))}
                            <a class="btn" onClick={()=> {dispatch(changeCategory({vId : id, nom : name})); navigate("/questions"); dispatch(setScore())}}>Start</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Profile
