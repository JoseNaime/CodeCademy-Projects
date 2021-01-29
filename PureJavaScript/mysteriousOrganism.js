// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num,
        dna: arr,

        mutate() {
            let isValid = false;
            const randVal = Math.floor(Math.random() * 15)
            const currVal = this.dna[randVal];
            let newDna = undefined
            do {
                newDna = mockUpStrand()
            } while (currVal !== newDna[randVal])
            this.dna = newDna
            return this.dna
        },

        compareDNA(dna2) {
            let commonValues = 0;
            for (let i = 0; i < 15; i++) {
                commonValues += (this.dna[i] === dna2.dna[i]) ? 1 : 0
            }
            const percentage = ((commonValues * 100) / 15).toFixed(2)
            console.log(`Specimen #${this.specimenNum}: ${this.dna}`)
            console.log(`Specimen #${dna2.specimenNum}: ${dna2.dna}`)
            console.log(`Specimen #${this.specimenNum} and specimen #${dna2.specimenNum} have ${percentage}% DNA in common`)
        },

        willLikelySurvive() {
            let positiveBases = 0;

            for (let i = 0; i < 15; i++) {
                const currBase = this.dna[i]
                if (currBase === 'C' || currBase === 'G') positiveBases++;
            }
            return ((positiveBases * 100) / 15).toFixed(2) >= 60
        }
    }
}

const createSurvivalPAequors = () => {
    let canSurvive = [];
    for (let i = 0; i < 30; i++) {
        const newPAequors = pAequorFactory(i, mockUpStrand());

        while (!newPAequors.willLikelySurvive()) {
            newPAequors.mutate()
        }

        canSurvive.push(newPAequors)

    }
    return canSurvive
}

const finalPAequors = createSurvivalPAequors()

// Prints final Paequors
finalPAequors.map(pAequors => console.log(pAequors))