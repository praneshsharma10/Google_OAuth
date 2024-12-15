import PropTypes from 'prop-types';


function Profile({ profileDetails, login, logout }) {
  return (
    <div className='profile-container'>
      {profileDetails.length !== 0 ? (
        <div className="profile-details">
          <img src={profileDetails.picture} alt="User Avatar" className='profile-avatar' />
          <div className="profile-content">
            <h3 className="profile-name">{profileDetails.name}</h3>
            <h5 className="profile-email">{profileDetails.email}</h5>
          </div>
          <button className='profile-button logout-button' onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="landing-container">
          <button className='profile-button login-button' onClick={login}>
            <svg className="google-icon" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
              <path
                fill="#000"
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
      )}
    </div>
  );
}

Profile.propTypes = {
  profileDetails: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
    ),
    PropTypes.shape({
      length: PropTypes.number,
    })
  ]).isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Profile;

