import './App.css'

function Movie({image , date,language,
  stars , views,title, voted,genre,director}) {
    var date = new Date(1584041399); 
    var new_d = date.toString()
    
  return (
    <div className='card'>
      <div className='card_left'>
        <img
          src = {image}
          alt='poster'
          wid
        />
      </div>
      <div className='card_right'>
        <div className='card_right__details'>
          <ul>
            <li>Release date : {new_d}</li>
            <li>111 min</li>
            <li> genre : {genre}</li>
          </ul>
          <div className='card_right__review'>
            <ul>
              <li>
                Title :<strong> {title} </strong>
              </li>
              <li>
                Director : <strong>{director}</strong>
              </li>
              <li>
                Language : <strong>{language}</strong>
              </li>
              <li>
                Starring : <strong>{stars}</strong>
              </li>
             
              <li>
                Views :<strong> {views}</strong>
              </li>
              <li>
                Voted By :<strong> {voted}</strong>
              </li>
            </ul>
          </div>
          <div class='card_right__button'>
            <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME'>
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie


