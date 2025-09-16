import {useState, useEffect} from 'react';
import logo from './Images/MyPic.jpg';
import './App.css';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://vmlxpgpxsxukmepaovqs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbHhwZ3B4c3h1a21lcGFvdnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNDM1MzMsImV4cCI6MjA3MzYxOTUzM30.9v5UG2as34endU9IwKwIeZiGRacIKzHHRDBwB24b56s')

function GetCharacters(){

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters(){
    let { data } = await supabase.from('Overwatch').select('*');
    setCharacters(data);
  }

  return(
    <>
      {characters.map((character) =>(
        <p key={character.id} class="p-5">
        <img src={character.image}
        alt={character.name}
        style={{
          width: 256,
          height: 256
        }}
        class="rounded-[20px] min-[960px]:bg-white bg-[#8B008B] border-2 border-black border-solid"
        />
        </p>
      ))}
    </>
  );
}

function Pizza() {

  const [img, setImg] = useState();

  const getImage = async () => {
    const res = await fetch("https://foodish-api.com/images/pizza/pizza38.jpg");
    const data = await res.blob();
    const imageURL = URL.createObjectURL(data);
    setImg(imageURL);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <p class="p-5">
      <img src={img} 
      alt="pizza" 
      style={{
        width: 256,
        height: 256
      }}
      class="rounded-[20px] bg-white border-2 border-black border-solid"
      />
    </p>
  )
}

function Samosa() {

  const [img, setImg] = useState();

  const getImage = async () => {
    const res = await fetch("https://foodish-api.com/images/samosa/samosa9.jpg");
    const data = await res.blob();
    const imageURL = URL.createObjectURL(data);
    setImg(imageURL);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <p class="p-5">
      <img src={img} 
      alt="samosa" 
      style={{
        width: 256,
        height: 256
      }}
      class="rounded-[20px] bg-white border-2 border-black border-solid"
      />
    </p>
  )
}

function Pasta() {

  const [img, setImg] = useState();

  const getImage = async () => {
    const res = await fetch("https://foodish-api.com/images/pasta/pasta26.jpg");
    const data = await res.blob();
    const imageURL = URL.createObjectURL(data);
    setImg(imageURL);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <p class="p-5">
      <img src={img} 
      alt="pasta"
      style={{
        width: 256,
        height: 256
      }}
      class="rounded-[20px] bg-white border-2 border-black border-solid"
      />
    </p>
  )
}


function App() {
  return (
    <div className="App">
      <header id="aboutme" class="min-[960px]:bg-white bg-[#8B008B] min-[960px]:text-[#8B008B] text-white flex flex-col items-center rounded-t-[20px] justify-between">
        <h1 class="text-[40px] font-bold p-5">Welcome!</h1>
      </header>
      <nav class="min-[960px]:bg-white bg-[#8B008B] min-[960px]:text-[#8B008B] text-white flex flex-col items-center p-2.5 justify-between sticky top-0">
        <ul class="list-none m-0 p-0">
          <li class="inline-block p-2.5"><button class="font-bold hover:text-black"
          onClick={() => {const element=document.getElementById('aboutme');
          element?.scrollIntoView({
            behavior : 'smooth'
            })
          }}>About Me</button></li>
          <li class="inline-block p-2.5"><button class="font-bold hover:text-black"
          onClick={() => {const element=document.getElementById('knowledge');
          element?.scrollIntoView({
            behavior : 'smooth'
            })
          }}>Knowledge</button></li>
          <li class="inline-block p-2.5"><button class="font-bold hover:text-black"
          onClick={() => {const element=document.getElementById('api');
          element?.scrollIntoView({
            behavior : 'smooth'
            })
          }}>Api</button></li>
          <li class="inline-block p-2.5"><a class="font-bold hover:text-black" href="https://github.com/CharlesDrake">Github</a></li>
        </ul>
      </nav>
      <main class="mx-auto w-4/5">
      <div class="flex min-[960px]:flex-nowrap flex-wrap flex-row-reverse">
        <img src={logo} className="App-logo" alt="logo" class="m-2.5 p-2.5 w-[498px] h-[576px] rounded-[20px]"/>
        <div>
        <p class="min-[960px]:text-white m-5 text-black">Hi! My name is Charles Drake Jr. I am from Detroit, Michigan and I am a Junior at Michigan State University majoring in Games and Interactive Media with a focus in Game Development. This is my portfolio and in it you will see my progress as I learn how to code. The different classes that I have taken are CSE 231 at Michigan State University which focuses on the coding language Python and I have taken CSE 232 which is the next class after CSE 231 that focuses on the coding language C++. Furthermore, I have also taken Web Development courses where I have lerned to make websites such as this one. This portfolio shows off my growth as the semester continues as I learned Python, become more proficient in C++, and demostrate my knowledge in Html, Css, Javascript, and databases and apis, by showing the different projects, assignments, and the creation of this portfolio that range from over a year of classes.</p>
        </div>
      </div>
      <p class="min-[960px]:text-white p-5 text-black">I found myself choosing Games and Interactive Media for my major due to the immense amout of video games I find myself enjoying. I love to play games of all different types ranging from strategy to action and everything in between. Currently I am playing a lot of Overwatch due to it being my favorite game at the moment.</p>
        <p class="min-[960px]:text-white p-5 text-black">Some games that are also my favorite are:</p>
        <ul class="min-[960px]:text-white p-5 text-black">
          <li>Assassin's Creed Rogue</li>
          <li>Minecraft</li>
          <li>Elden Ring</li>
          <li>God of War</li>
        </ul>
      <div id="knowledge"></div>
        <div class="flex gap-5 mt-5">
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold">Python</h2>
            <p class="m-5 text-white min-[960px]:text-black p-5">Here are some things I have learned in Python!</p>
        </section>
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold">C++</h2>
            <p class="m-5 text-white min-[960px]:text-black p-5">Here are some things I have learned in C++!</p>
        </section>
      </div>
      <div class="flex min-[1222px]:flex-nowrap flex-wrap gap-5 mt-5">
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold"> Python Repetition:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <p class="m-5 text-[20.8px] font-bold p-5">For:</p>
            <pre class="actual-code">
{`num_str = input("Input an int: ")
N = int(num_str)
          
for i in range(1,N):
    print(i)`}
            </pre>
            <p class="m-5 text-[20.8px] font-bold p-5">While:</p>
            <pre class="actual-code">
{`num_str = int(input("Input an int: "))

num_sum = 0
while num_str != 10:
    num_sum += num_str
    num_str = int(input("Input an int: "))
                
print(num_sum)`}
            </pre>
          </div>
        </section>
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold">C++ Repetition:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <p class="m-5 text-[20.8px] font-bold p-5">For:</p>
            <pre class="actual-code">
{`int main(){
    for (int i = 0; i &lt; 5; ++i) cout << i << ", ";
                
    cout << endl;
}`}
            </pre>
            <p class="m-5 text-[20.8px] font-bold p-5">While:</p>
            <pre class="actual-code">{`int main(){
    int x;
    int sum = 0;
    while (cin >> x){
        sum += x;     
    }
    cout << sum << endl;
}`}
            </pre>
          </div>
        </section>
      </div>
      <div class="flex min-[1021px]:flex-nowrap flex-wrap gap-5 mt-5">
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold"> Python Functions:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <pre>
{`first = 0
second = 0
def find_min(first,second):
    first = int(input("Enter first number: "))
    second = int(input("Enter second number: "))
    if first < second:
        return first
    if second < first:
        return second
minimum = find_min(first,second)
print("Minimum: ", minimum)`}
            </pre>
          </div>
        </section>
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold">C++ Functions:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <pre>
{`

int Triple(int x){
  int triple_value = x * 3;
  return triple_value;
}
int main(){
  int x;
  cin >> x;
  cout << Triple(x) * 2;
}`}
            </pre>
          </div>
        </section>
      </div>
      <div class="flex min-[1021px]:flex-nowrap flex-wrap gap-5 mt-5">
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold"> Python Classes:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <pre>
{`class Student(object):
    def __init__(self,score = 10):
        self.score = score
                    
    def add_score(self):
        self.score += 10
            
    def decrease_score(self):
        self.score -= 10
                
    def __str__(self):
        current_score = str(self.score)
        return current_score`}
            </pre>
          </div>
        </section>
        <section class="grow basis-0 bg-[#8B008B] min-[960px]:bg-white rounded-[20px] mt-5">
          <div class="code-copy">
            <h2 class="m-5 text-white min-[960px]:text-black text-2xl font-bold">C++ Classes:</h2>
          </div>
          <div class="pt-0 pr-[20px] pb-[20px] pl-[20px] bg-black text-white rounded-b-[20px]">
            <pre>
{`

class ForgetfulVector{
    public:
        vector&lt;int&gt; vec;
        vector&lt;int&gt; holder;
        ForgetfulVector() : vec(){};
        vector&lt;int&gt; push_back(int);
        int size();
        int at(int);
};

            `}
            </pre>
          </div>
        </section>
      </div>
      <div id="api"></div>
      <p class="text-black min-[960px]:text-white p-5">One thing I have learned in my Web Development course is that of different databases and apis. The next section of this website shows how I have used different apis and databases to show show images of my favorite characters from the game Overwatch and the food under them that I would feed them if givent the opportunity. From left to right we have Moira who I would feed pizza to, Kiriko who I would feed samosas to, and Lucio who I would feed pasta to.</p>
      <div class="flex flex-col items-center">
        <section class="flex flex-wrap flex-row">
          <GetCharacters />
        </section>
        <section class="flex flex-wrap flex-row">
          <Pizza />
          <Samosa />
          <Pasta />
        </section>
      </div>
    </main>
    </div>
  );
}

export default App;