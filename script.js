picC=["img/paper.png","img/scissors.png","img/stone.png"]
var mypic;
function startGame(mypic){
    indPic=Math.floor(Math.random()*3);
    switch(mypic){
        case 0:
            mypic1.src=picC[0];
            // mypic1.src="img/paper.png"
            break;
        case 1:
            mypic1.src=picC[1];
            // mypic1.src="img/scissors.png"
            break;
        case 2:
            mypic1.src=picC[2];
            // mypic1.src="img/stone.png"
            break;

    }
    mypic1.style.border="4px solid rgb(189, 50, 0)"
    mypic2.style.borderWidth=0
    mypic3.style.borderWidth=0
    mypic2.src="img/spacer.gif";
    mypic3.src=picC[indPic];
    //0-бумага, 1-ножницы, 2-камень
    if(mypic==0&&indPic==1){
        mypic2.src="img/defeat.png";
    }
    if(mypic==0&&indPic==2){
        mypic2.src="img/win.png";
    }
    if(mypic==1&&indPic==2){
        mypic2.src="img/defeat.png";
    }
    if(mypic==1&&indPic==0){
        mypic2.src="img/win.png";
    }
    if(mypic==2&&indPic==0){
        mypic2.src="img/defeat.png";
    }
    if(mypic==2&&indPic==1){
        mypic2.src="img/win.png";
    }
    if(mypic==indPic){
        mypic2.src="img/draw.png";
    }
}