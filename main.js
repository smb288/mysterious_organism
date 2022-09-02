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
    }
  };
}

let aequorArray = []
for (let i = 0; i < 5; i++)
  aequorArray.push(pAequorFactory(i, mockUpStrand()))

console.log(aequorArray[3].dna);
aequorArray[3].mutate();
console.log(aequorArray[3].dna);