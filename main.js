const username = 'nanana';
const password = 'coffee';
let money = 2000;
let wrongTries = 1;

const form = document.querySelector('.form');
const submit = document.querySelector('#submit');

// check tries
submit.addEventListener('click', ()=> {
    if(wrongTries === 3){
        document.querySelector('body').innerHTML = `
        <h1>boom!</h1>
        `
    }else{

        if(document.querySelector('#username').value === username && document.querySelector('#password').value === password){
            form.style.display = 'none';
            displayMenu();
        }else{
            alert('خطأ في اسم المستخدم او كلمة المرور');
            wrongTries++
        }
    
    }
});

const menu = document.querySelector('.menu');
function displayMenu(){
    menu.style.display = 'flex';
}

// menu events

// ايداع
document.querySelector('#deposit').addEventListener('click', () => {
    menu.style.display = 'none';
    document.querySelector('.depositDiv').style.display = 'flex';
});
let todayEntery = 0;
document.querySelector('.depositDiv a').addEventListener('click', () => {
    if(todayEntery >= 10000){
        alert('وصلت الحد اليومي للايداع 10.000');
    }else{

        if(document.querySelector('.depositDiv input').value > 2000 || document.querySelector('.depositDiv input').value < 1){
            alert('لا يمكن ايداع اقل من 1 أو اكثر من 2.000 في المرة الواحدة');
        }else{

            if(todayEntery >= 4000 && todayEntery <= 6000){
                money += +document.querySelector('.depositDiv input').value - 1/100 * document.querySelector('.depositDiv input').value;
            }else if(todayEntery > 6000 && todayEntery <= 8000){
                money += +document.querySelector('.depositDiv input').value - 2/100 * document.querySelector('.depositDiv input').value;
            }else if(todayEntery > 8000){
                money += +document.querySelector('.depositDiv input').value - 3/100 * document.querySelector('.depositDiv input').value;
            }else{
                money += +document.querySelector('.depositDiv input').value;
            }
    
            todayEntery += +document.querySelector('.depositDiv input').value;
            document.querySelector('.depositDiv').style.display = 'none';
            document.querySelector('.doneDiv').style.display = 'flex';
    
        }
    
    }

});
// سحب
document.querySelector('#withdraw').addEventListener('click', () => {
    menu.style.display = 'none';
    document.querySelector('.withdrawDiv').style.display = 'flex';
});

let todayOut = 0;
document.querySelector('.withdrawDiv a').addEventListener('click', () => {
    if(todayOut >= 70000){
        alert('وصلت الحد اليومي للسحب 7.000');
    }else{

        if(money < document.querySelector('.withdrawDiv input').value){
            alert('لا يوجد رصيد كافي')
        }else{

            if(document.querySelector('.withdrawDiv input').value > 1000 || document.querySelector('.withdrawDiv input').value < 1){
                alert('لا يمكن سحب اقل من 1 أو اكثر من 1.000 في المرة الواحدة');
            }else{
    
                if(todayOut >= 5000 && todayOut <= 6000){
                    money -= +document.querySelector('.withdrawDiv input').value + 1/100 * document.querySelector('.withdrawDiv input').value;
                }else if(todayOut > 6000){
                    money -= +document.querySelector('.withdrawDiv input').value + 2/100 * document.querySelector('.withdrawDiv input').value;
                }else{
                    money -= +document.querySelector('.withdrawDiv input').value;
                }
        
                todayOut += +document.querySelector('.withdrawDiv input').value;
                document.querySelector('.withdrawDiv').style.display = 'none';
                document.querySelector('.doneDiv').style.display = 'flex';
        
            }
    
        }

    
    }

});


// تحويل
document.querySelector('#transfer').addEventListener('click', () => {
    menu.style.display = 'none';
    document.querySelector('.transferDiv').style.display = 'flex';
});

document.querySelector('.transferDiv a').addEventListener('click', () => {
    if(document.querySelector('.transferDiv .money').value > money){
        alert('لا يوجد رصيد كافي')
    }else{
        money -= +document.querySelector('.transferDiv .money').value;
        document.querySelector('.transferDiv').style.display = 'none';
        document.querySelector('.doneDiv').style.display = 'flex';    
    }

});

document.querySelector('#balance').addEventListener('click', () => {
    menu.style.display = 'none';
    document.querySelector('.balanceDiv').style.display = 'flex';
    document.querySelector('.balanceDiv span').innerHTML = `${money}`
});

// done 
// document.querySelectorAll('.done').forEach((e) => {
//     e.addEventListener('click', () => {
//         document.querySelectorAll('.menuItem').forEach((e) => {
//             e.style.display = 'none'
//         });
//         document.querySelector('.doneDiv').style.display = 'flex';
//     });
// }) ;   


document.querySelectorAll('.back').forEach((e) => {
    
    e.addEventListener('click', () =>{
        document.querySelectorAll('.menuItem').forEach((e) => {
            e.style.display = 'none'
        });
    
        menu.style.display = 'flex';
    
    });

})

//exit 
document.querySelector('#exit').addEventListener('click', () =>{
    document.querySelectorAll('.menuItem').forEach((e) => {
        e.style.display = 'none'
    });
    menu.style.display = 'none';
    form.style.display = 'flex';


})
