import propic from './propic.jpg';


function ProfilePicture() {
  return (
    <div className="profilepic">
        <img src={propic}  alt="pic" height={200} width={200} style={{ borderRadius: 20 }}/>
      
    </div>
  );
}

export default ProfilePicture;
