import './App.css'

function App() {

let n=5;
console.log(n);

let x =2;
let y =3;




  return (
      <>
          <div class="head">
              <div class="nrkomp">Komputer przy którym siedzę ma numer: {n}</div>

</div>
    <div class="par">
            <div class="tabliczka">
                <p>
                {n} * 1 = {a1}<br></br>
                {n} * 2 = {a2}<br></br>
                {n} * 3 = {a3}<br></br>
                {n} * 4 = {a4}<br></br>
                {n} * 5 = {a5}<br></br>
                {n} * 6 = {a6}<br></br>
                {n} * 7 = {a7}<br></br>
                {n} * 8 = {a8}<br></br>
                {n} * 9 = {a9}<br></br>
                {n} * 10 = {a10}<br></br>
                </p>
          </div>

              <div class="rownanie1">
                  <p>z = {z}</p><br></br>
                <p>{n} * 3 + 2z - {n} = {v1}</p>
          </div>


              <div class="rownanie2">
                  <p>x = {x} y = {y}</p><br></br>

                  <p>
                    15x<sup>3</sup>+1-15y = {r1}<br></br>
                    2x+315-4x<sup>2</sup> = {r2}<br></br>
                    3y<sup>2</sup>-15x<sup>2</sup>y-7y = {r3}<br></br>
                    2xy+15xy; = {r4}<br></br>
                    3x<sup>2</sup>+15y+2 = {r5}
                  </p>
              </div>
    </div>
  </>

  )
}

export default App

