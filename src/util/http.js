export async function fetchGameSesions() {
    let url = 'https://dhs-dxty.onrender.com/api/v1/bikegame/game_sessions'

   
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the data');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const resData = await response.json();

    console.log(resData)

    return resData;
  }