import profile from './profile.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <main>
        <div>
          <iframe
            className='video'
            style={{ borderRadius: '0.8rem' }}
            width='672'
            height='378'
            src='https://www.youtube.com/embed/baaNwRAhHBo?si=UYQTZfnXBF8XwJ0g'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
        <div className='video-info'>
          <div className='title'>동영상 제목</div>
          <div className='video-info-bar'>
            <div className='channel'>
              <div className='img-box'>
                <img
                  className='profile'
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///8lJSW1tbXy8vL8/PykpKTGxsbs7Oz29vZgYGDp6empqamwsLDZ2dne3t6ampqJiYl5eXnT09NWVlY4ODjNzc1lZWVRUVG+vr6QkJBISEhvb289PT1JSUlqamp/f38MDAyOjo4bGxszMzMsLCwiIiKP/YGqAAADhUlEQVR4nO3c6VbiQBCGYRqSsBMWBRGQxdH7v8QJKEowC5CKVcT3+Ts5x/qGkO6u7lCrAQAAAAAAAAAAAAAAAAAAAADwt9TXD9ollGncbDvX0K6iNNue7/YqmzBwn/ralZTjoX0M6ALtWkrx9QFGRtrFlKF5EtA9aldTgulpQKddTQkasYBN7XLkbWIB3Vi7HnFv8YAVvEkH8YA97XrELSv/EbbiAas33M/iAT3teuTFh0L3pF2PvHjAoXY58uJj4Vy7nBI0qh4wNhhW8BaNfK8K/Y52LeX4CljZ1sUx35t2IaXx/HbYWGpXgUvVZ5vn4W68Sr1guwyaoee1BvPh+hfrkrEdTb8em/5k9/rzilUQxkb/cFj//TJv9nA2+3RucraSf+6eXxGZ3kt/fzFIqN75/cXxglkz6YLDf8Q/zcIv1Ugr33WD2Xt92W+nXuDuYaKz8rLqv8BEO0GOdcF8ka52hkyb/AD5WtopMowlAkYDh3aOVE8yAQ1Py/2qJ5xIBbS6chT6EjrP7OxN6B61+yQdygQ03CKWCejM3qK1nUzAmXaOdEmroesZ7qA+igT0tWNkCPLLv8CzdowMYX75+Sx/hDJPUssb3h2RhJZbGCLDvd3ZTC2rN3MFqyuKg8Tu2rVMn+Br5defz+qi6UBkXWF3SloTGiy0Q2QiIQkPLA/4MgkNrw2FEu60U2TJ3E66lOk5jcgK33ATSqoZbPkISl8koeXTtDLN0rZ2jAwCG6N7G+0c6V5lElp+1sgktPxN/HGA5kaL/D+lRKZfavlh8yKU0PBJDLEdbrPHFFIPcl2tu9XOkkzkJM0HqyfA5RJaXWWIncTY8y32TgVv0z2LL+nLJrR4mFZk7+LI5Mi/kExoc4Iqsg/8yeaYeP6GbwFW39EX2YE6eNGOkkLq7J4baCdJJfUhWhwqPgi1aywf1xfZ7Xbpb0rpEzn8ZXPefdQrHtD0yahI0VdmnLP+/mXhhs1UO0Gugl036/foXrGdNtMbwZ/qRQLafo4eFZiB2+2Wxt2+m2j6WNSpW7tSRtuISW5bDG+0y75G6gPVTz+2YbGDmCFhDh4GnffDv60284Rtjrv7ZbqzGao3jP/qwPpsx9Gzu3OY6unkyzhN+FWIt973B+nbf0k9UWceLfr9VnOU1jnr9CatthfO7+4GBQAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/7j8xviXsgcMNmQAAAABJRU5ErkJggg=='></img>
              </div>
              <div className='channel-info'>
                <p>코딩애플</p>
                <p>구독자 23.4만명</p>
              </div>
              <dib>
                <button>구독</button>
              </dib>
            </div>
            <div className='button'>
              <div className='like-unlike'>
                <button>좋아요</button>
                <button>싫어요</button>
              </div>
              <div className='share'>
                <button>
                  <img></img>공유
                </button>
              </div>
              <div className='more'>
                {' '}
                <button>・・・</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
