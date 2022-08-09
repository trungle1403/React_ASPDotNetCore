var _listGridAutoResize = new Array();
//$(function () {
//    NTS.loadDataCombo_v1({
//        name: '#selKyBaoCao_head',
//        ajaxUrl: '/api/GetKyBaoCao',
//        ajaxParam: {},
//        indexText: 1,
//        indexValue: 0
//    });
//    NTS.getAjax("/api/SetWidhtHeight", { width: ($("#divNoiDung").width() - 20), height : window.innerHeight });
//    $('#selKyBaoCao_head').val($('#hdfHeader_kyBaoCao').val() == "" ? "20" : $('#hdfHeader_kyBaoCao').val()).change();
//});
//$(window).resize(function () {
//    NTS.getAjax('/api/SetWidhtHeight', { width: $("#divNoiDung").width() - 17, height: window.innerHeight });
//});
function capNhatKyBaoCao()
{
    $('#hdfHeader_kyBaoCao').val($('#selKyBaoCao_head').value());
    var result = NTS.getAjax_v1('/api/CapNhatKyBaoCao',
        {
            tuNgay: $('#txtTuNgay_head').val(),
            denNgay: $('#txtDenNgay_head').val(),
            kyBaoCao: $('#selKyBaoCao_head').val(),
            keyMaHoa: $('#KeyMaHoa_H').val(),
        });
    if (result.Result) {
        location.reload();
        $('#selKyBaoCao_head').val($('#hdfHeader_kyBaoCao').val()).change();
    }
}
function OnClickMenu(duongDan) {
    if (duongDan != "" && duongDan != "#") {

    }
}
$('#Logout').click(function () {
    debugger;
    var result = NTS.getAjax_v1('/api/Logout', {});
    window.location = "/hethong/login";
});


