const dropdownitems = document.querySelectorAll('.dropdown-item');
if (dropdownitems.length > 0) {
    dropdownitems.forEach((item)=>{
        item.addEventListener('click', function (e) {
            item.parentElement.querySelectorAll('.is-active')[0].classList.toggle('is-active');
            item.classList.toggle('is-active');
            e.stopPropagation();
        });
    });
}

const dropdownstriggers = document.querySelectorAll('.level-item');
if(dropdownstriggers.length > 0) {
    dropdownstriggers.forEach((trigger)=>{
        trigger.addEventListener('mouseover', (e)=>{
            trigger.classList.toggle('has-background-primary-dark');
        });
        trigger.addEventListener('mouseout', (e)=>{
            trigger.classList.toggle('has-background-primary-dark');
        });
    });
}