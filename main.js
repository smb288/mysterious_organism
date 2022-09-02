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
    },
    // Returns complementary strand
    // A = T, C = G
    complementStrand() {
      let cStrand = [];
      for(let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            cStrand.push('T');
            break;
          case 'T':
            cStrand.push('A');
            break;
          case 'C':
            cStrand.push('G');
            break;
          case 'G':
            cStrand.push('C');
            break;
          default:
            break;
        }
      }
      return cStrand;
    }
  };
}

let pAequorArray = [];

for(let i = 0; i < 30; i++) 
  pAequorArray.push(pAequorFactory(i, mockUpStrand()));

strandTest = pAequorFactory(0, mockUpStrand());
console.log(strandTest.dna);
console.log(strandTest.complementStrand());