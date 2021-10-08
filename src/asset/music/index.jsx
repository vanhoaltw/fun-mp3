
export const test = [
    {
        name: 'Ái Nộ 1',
        singer:'Masew',
    },
    {
        name: 'Cưới thôi',
        singer:'Masew x Masiu x B Ray',
    },
    {
        name: 'Độ tộc 2',
        singer:'Masew x Độ Mixi',
    },
    {
        name: 'Phận duyên lỡ nàng',
        singer:'Phát Huy x TRUZG',
    },
    {
        name: 'Thê lương',
        singer:'Phúc Chinh',
    },
    {
        name: 'Níu duyên',
        singer:'Lê Bảo Bình',
    },

]

const deleteVN = (str)=>{
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.replace(/\s+/g,'').toLocaleLowerCase();
}

const formatPath = (value)=>{
    let nameSong = deleteVN(value);
    console.log('name ', nameSong)
    console.log('path:' , `./image/${nameSong}.jpg`)
    return [`./asset/music/${nameSong}.mp3`, `./asset/image/${nameSong}.jpg`]
}
var uid = 0;
export const all = test.map(e =>{
    let result = formatPath(e.name) 
    uid++
    return {...e,id:uid, path:result[0] ,image: result[1] }
})