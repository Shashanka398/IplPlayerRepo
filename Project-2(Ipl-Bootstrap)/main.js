const iplTeam = {
    "RCB": [
      {
        name: "Virat Kohli",
        role: "Batsman",
        image: "https://imgs.search.brave.com/D1RBpGKW8g-Kex_InTK-MMn-JJPufkkhKLauldSG3Rg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY2MzY0/OTYuanBn"
      },
      {
        name: "Siraj",
        role: "Bowler",
        image: "https://imgs.search.brave.com/UHhEVF6FehT2dd9a37UJAH2Zpw45JmjhU_C7HUAwVo4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjItMDUvZjJ0bnEz/bF9tb2hhbW1lZC1z/aXJhai1yY2ItYmNj/aWlwbF82MjV4MzAw/XzE0X01heV8yMi5q/cGc_aW09RmFjZUNy/b3AsYWxnb3JpdGht/PWRubix3aWR0aD04/MDYsaGVpZ2h0PTYw/NQ"
      },
      {
        name: "Faf du Plessis",
        role: "Batsman(C)",
        image: "https://imgs.search.brave.com/e4JriAOjyCk1OCEDEUfiXQgSe3DXwTIvZjbp0nz3ZlQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JpY2J1enouY29t/L2EvaW1nL3YxLzU5/NXgzOTYvaTEvYzIy/ODE2My9mYWYtZHUt/cGxlc3Npcy13aWxs/LWJlY29tZS10aGUu/anBn"
      },
      {
        name: "Dinesh Karthik",
        role: "Batsman",
        image: "https://imgs.search.brave.com/QIj34jkFS1AcCftgw9qC-a1AqOpfmQwONjeJatL0lUk/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA0L0RpbmVzaC1L/YXJ0aGlrLTguanBn"
      },
      {
        name: "Glen MaxWell",
        role: "All Rounder",
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png"
      }

    ],
    "Mi": [
      {
        name: "RohITH Sharma",
        role: "Batsman(C)",
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
      },
    //   {
    //     name: "Surya Kuamr",
    //     role: "Batsman",
    //     image: "https://www.iplt20.com/teams/mumbai-indians/squad-details/108"
    //   },
    //   {
    //     name: "Ishan Kishan",
    //     role: "Batsman",
    //     image: "https://www.iplt20.com/teams/mumbai-indians/squad-details/2975"
    //   }
    //   {
    //     name: "Nisha Verma",
    //     role: "All-Rounder",
    //     image: "nisha_verma.jpg"
    //   },
    //   {
    //     name: "Nisha Verma",
    //     role: "All-Rounder",
    //     image: "nisha_verma.jpg"
    //   },
    ],
    "Delhi Dynamos": [
      {
        name: "Vikram Sharma",
        role: "Batsman",
        image: "vikram_sharma.jpg"
      },
      {
        name: "Rahul Kapoor",
        role: "Bowler",
        image: "rahul_kapoor.jpg"
      },
      {
        name: "Priya Singh",
        role: "All-Rounder",
        image: "priya_singh.jpg"
      },
    ],
  };


const makeCarousel=(team,carouselInner)=>{

    team.forEach((element, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
      
        if (index === 0) {
          carouselItem.classList.add("active");
        }
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "400px";
        card.style.height = "400px";
      
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = element.image;  // Replace with actual image URL
        image.style.width = "400px";
        image.style.height = "250px";
        image.alt = "Card Image";
      
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
      
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = element.name;
      
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = element.role;
      
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
      
        card.appendChild(image);
        card.appendChild(cardBody);
      
        carouselItem.appendChild(card);
      
        carouselInner.appendChild(carouselItem);
      });
      

}

const rcbClass = document.querySelector(".team-rcb");
const rcbTeam = iplTeam["RCB"];
makeCarousel(rcbTeam,rcbClass)

const miClass = document.querySelector(".team-mi");
const miTeam = iplTeam["Mi"];
makeCarousel(miTeam,miClass)

