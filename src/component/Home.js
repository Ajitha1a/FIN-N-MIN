import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../images/banner.png'

function Home() {
  return (
    <div className='bannerDiv'>
      <h2 class="Better-Future-For-You">
        Better Future For Your Kids
      </h2>
      <span className='let-the-child'>
        Let the child be the director, and the actor in his own play
      </span>
      <p className="banner-content">
        We just don’t give our students only lecture but real life
        experiment, workshops and filed experience throughout
        the journey!
      </p>
      <img src={banner} className='Banner' />
    </div>
  );
}

export default Home;