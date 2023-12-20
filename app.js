function Calculator(){
    let input = document.querySelector('#inp').value
    if(input == ''){
        alert('please Enter BirthDate');
    }else{
        let head = document.querySelector('#text')
        let inputUser = new Date(input)
        let convert = inputUser.toString()
        let sliceCon = convert.slice(10,15)
        let NumCon = Number(sliceCon)
        if(NumCon > 2023 || NumCon <= 1900 ){
            alert('Enter Correct Age');
        }else{
            let inputmiliseconds = inputUser.getTime();
            let currentTime = new Date();
            let currentTimemiliseconds = currentTime.getTime();
            let minus = currentTimemiliseconds - inputmiliseconds;
            let finalResult = minus / (1000 * 60 * 60 * 24 * 31 * 12)
            head.innerHTML = `Your Age is ${Math.floor(finalResult)} `
        }
       
    }
    head.innerHTML = ''


    

}

// let Date1 = new Date()
// console.log(Date1);
// let sli = Date1.toString()
// let ss = sli.slice(10,15)
// let convert1 = Number(ss)
// console.log(typeof convert1,convert1);
