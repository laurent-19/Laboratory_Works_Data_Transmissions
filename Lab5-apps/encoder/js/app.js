var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        encodedBits5: [],
        encodedBits6: [],
        encodedBits7: [],
        encodedBits8: [],
        encodedBits9: [],
        encodedBits10: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits1 = getManchesterLevelEncoding(this.bits);
            this.encodedBits2 = getNRZLEncoding(this.bits);
            this.encodedBits3 = getNRZMEncoding(this.bits);
            this.encodedBits4 = getNRZSEncoding(this.bits);
            this.encodedBits5 = getRZEncoding(this.bits);
            this.encodedBits6 = getBLEncoding(this.bits);
            this.encodedBits7 = getBMEncoding(this.bits);
            this.encodedBits8 = getBSEncoding(this.bits);
            this.encodedBits9 = getBLDiffEncoding(this.bits);
            this.encodedBits10 = getDelayEncoding(this.bits);
        }
    }
})


