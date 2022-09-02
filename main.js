// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


// Factory function that holds a generated DNA
// strand and a number for each specimen
function pAequorFactory(specimenNumber, dna) {
  return {
    specimenNumber: specimenNumber,
    dna: dna,
    // Selects random DNA base and regenerates 
    mutate() {
      let dnaIndex = Math.floor(Math.random() * dna.length);
      let baseArray = ['A','T','C','G'];
      let newBase = '';

      do {
        let randomBase = Math.floor(Math.random() * 4);
        newBase = baseArray[randomBase];
      } while(newBase === this.dna[dnaIndex]);

      this.dna[dnaIndex] = newBase;
    },
    // Compares DNA strand with another object.
    // Prints the percentage of the DNA that is similar.
    compareDNA(pAequorObj) {
      let similarCount = 0;
      for(let i = 0; i < pAequorObj.dna.length; i++) {
        if(pAequorObj.dna[i] === this.dna[i]) {
          similarCount++;
          console.log(`Index: ${i}, ${this.dna[i]}, ${pAequorObj.dna[i]}`)
        }
      }
      let percentSimilar = (similarCount / pAequorObj.dna.length) * 100;
      console.log(`Specimen #1 and specimen #2 have ${percentSimilar.toPrecision(2)}% DNA in common`);
    },
    // Calculates percentage of bases that are C or G
    willLikelySurvive() {
      let likelyCounter = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G')
          likelyCounter++;
      }
      
      let percentSurvive = (likelyCounter / this.dna.length) * 100;
      return percentSurvive > 60;
    }
  };
}

let likelyStrand = ['C', 'C', 'C', 'A', 'G'];
let unlikelyStrand = ['A', 'A', 'C', 'A', 'A'];
let pAequorArray = [];

for(let i = 0; i < 30; i++) 
  pAequorArray.push(i, mockUpStrand());

console.log(pAequorArray);