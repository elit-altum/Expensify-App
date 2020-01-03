//For transitioning preLoader
let getContent = () => {
    setInterval( () => {
      document.getElementById("app").style.display = "block";
      document.getElementById("for-loader").style.display = "none";
    }, 3000);
}