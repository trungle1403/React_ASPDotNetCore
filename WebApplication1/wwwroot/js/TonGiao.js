var tempthem = "them";
$(document).ready(function () {
    $('#btnThemMoi').click(function () {
        if (!ntspermiss.them) {
            NTS.canhbao("User bạn đang sử dụng không thể thực hiện thao tác thêm mới. Vui lòng kiểm tra lại.");
            return false;
        }
        $('#tieuDeModal').text('Thêm mới tôn giáo');
        var result = NTS.getAjax('/Home/GetMaTuTang', {});
        var max = "";
        if (result.length > 0) {
            var tam = new String(result[0].maxcode);
            if (tam.length == 1) {
                max = "0" + tam;
                $('#txtMa').value(max);
            }
            else {
                $('#txtMa').value(tam);
            }
        }
        else {
            $('#txtMa').value('01');
        }
        $('#txtTen').value('');
        $('#txtDienGiai').value('');
        $('#CheckNgungSD').value('');
        tempthem = "them";
        $('#mdThemMoi').modal('show');
    });
    $(document).on('click', '.btnSuaGrid1', function () {
        SuaTonGiao($(this).attr('data'));
    });
    $(document).on('click', '.btnXoaGrid1', function () {
        var ID = $(this).attr('data');
        XoaTonGiao(ID);
    });
});
var btnThaoTac = function (cell, formatterParams, onRendered) { //plain text value
    return `<button class='btn btn-xs btn-primary btnSuaGrid1' title="Sửa" data='${cell.getRow().getData().TonGiaoID}' ><i class='fa fa-pencil'></i></button>&ensp;<button class='btn btn-xs btn-danger btnXoaGrid1' title="Xoá" data='${cell.getRow().getData().TonGiaoID}'><i class='fa fa-trash'></i></button>`;
};
var NgungSD = function (cell) {
    const value = cell.getValue();
    if (value)
        return `<input type="checkbox" checked disabled='disabled' />`;
    else
        return `<input type="checkbox" disabled='disabled' />`;
};

$(document).on('click', '.tabulator-page', function () {
    updateFooter();
});
$(document).on('change', '.tabulator-page-size', function () {
    updateFooter();
});
$(document).on('click', '.tabulator-footer', function () {
    updateFooter();
});


var table = new Tabulator("#example-table", {
    height: 500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    //data: tabledata, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    pagination: "local",
    selectable: 1,
    paginationSize: 50,
    paginationSizeSelector: [50, 100, 150, 250, 500, true],
    columns: [ //Define Table Columns

    ],
    footerElement: "<span id='row-count' style='color:#102D4F;font-size: 13px; font-family: Arial, Helvetica, sans-serif;font-weight:100'></span>", //add element element to footer to contain count
    dataFiltered: updateFooter, //call updateFooter function when callback triggered
    dataLoaded: updateFooter, //call updateFooter function when callback triggered
    rowDblClick: function (e, row) { //trigger an alert message when the row is clicked
        $('#TonGiaoID').val(row.getData().TonGiaoID);
        SuaTonGiao(row.getData().TonGiaoID);
    },
    locale: true,
    langs: TabulatorLangsVi,
    placeholder: 'Không có dữ liệu',
});

function updateFooter() {
    var el = document.getElementById("row-count");
    if (table != undefined) {
        var Grid = table;
        if (Grid.rowManager.activeRows.length > 0) {
            el.innerHTML = 'Dòng: ' + (Grid.rowManager.table.footerManager.links[0].page * Grid.rowManager.table.footerManager.links[0].size - Grid.rowManager.table.footerManager.links[0].size + 1) + ' - ' + (Grid.rowManager.table.footerManager.links[0].page * Grid.rowManager.table.footerManager.links[0].size - Grid.rowManager.table.footerManager.links[0].size + Grid.rowManager.displayRowsCount) + ' của ' + Grid.rowManager.activeRows.length + " - ";
        }
        else {
            el.innerHTML = 'Dòng: 0 - 0 của 0 - ';
        }
    }
}


var GetAll = NTS.getAjax("/Home/GetAll", {});
if (GetAll.Err == false) {
    table.setData(GetAll.Result);
    var bang = "6D2AB518-DA0D-4C11-B0EE-3140DC164DB6";
    var menu = "EB080E69-7BE6-45EF-8DA5-01A5B0F4EA5C";
    var tableData_CauHinh = NTS.getAjax("/Home/GetAllCauhinhBang", { Bang: bang, menu: menu });
    tableData_CauHinh = tableData_CauHinh.Result;
    setTimeout(function () {
        table_CauHinh.setData(tableData_CauHinh);
    }, 100);
    setTimeout(function () {
        loadcauhinhluoi();
    }, 200);

}
else {
    NTS.thongbaoloi(GetAll.Msg);
}

$(document).on('keyup', '#timKiem', function (e) {
    if (e.keyCode == '13') {
        table.setFilter([[{ field: "TonGiaoCode", type: "like", value: $(this).val() },
        { field: "TenTonGiao", type: "like", value: $(this).val() },
        { field: "DienGiai", type: "like", value: $(this).val() },
        ]]);
        updateFooter();
    }
});

//set filter to custom function
$('#btnLuuVaDong').on('click', function () {
    if (isEmty($('#txtMa').value())) {
        NTS.canhbao('Mã không được để trống!');
        $('#txtMa').focus();
        return false;
    }
    if (isEmty($('#txtTen').value())) {
        NTS.canhbao('Tên tôn giáo không được để trống!');
        $('#txtTen').focus();
        return false;
    }
    var param = new Array();
    param[0] = $('#txtMa').value();
    param[1] = $('#txtTen').value();
    param[2] = $('#txtDienGiai').value();
    param[3] = $('#CheckNgungSD').value();
    param[4] = $('#TonGiaoID').val();
    param[5] = tempthem;
    var result = NTS.getAjax("/Home/LuuThongTin", { data: param });
    if (result.split('_')[0] == "1") {
        table.clearData();
        var GetAll = NTS.getAjax("/Home/GetAll", {});
        if (GetAll.Err == false) {
            table.setData(GetAll.Result);
        }
        else {
            NTS.thongbaoloi(GetAll.Msg);
        }
        NTS.thongbao(result.split('_')[1]);
        $('#mdThemMoi').modal('hide');
        return false;
    }
    if (result.split('_')[0] == "2") {
        NTS.canhbao(result.split('_')[1]);
        return false;
    }
    else {
        NTS.thongbaoloi('Thêm dữ liệu thất bại!');
        return false;
    }
})

function SuaTonGiao(ID) {
    if (!ntspermiss.sua) {
        NTS.canhbao("User bạn đang sử dụng không thể thực hiện thao tác chỉnh sửa. Vui lòng kiểm tra lại!");
        return false;
    }
    var result = NTS.getAjax('/Home/LoadDuLieuSua', { ma: ID });
    if (result.length > 0) {
        $('#txtMa').value(result[0].TonGiaoCode);
        $('#txtTen').value(result[0].TenTonGiao);
        $('#txtDienGiai').value(result[0].DienGiai);
        $('#CheckNgungSD').value(result[0].NgungSD);
        $('#TonGiaoID').val(result[0].TonGiaoID);
        $('#mdThemMoi').modal('show');
        $('#tieuDeModal').text('Cập nhật tôn giáo');
        tempthem = "sua";
    }
    else {
        NTS.thongbaoloi('Tải dữ liệu sửa thất bại!')
    }
}

function XoaTonGiao(ID) {
    if (!ntspermiss.xoa) {
        NTS.canhbao("User bạn đang sử dụng không thể thực hiện thao tác xóa. Vui lòng kiểm tra lại!");
        return false;
    }
    var result_ktxoa = "";
    if (result_ktxoa == "") {
        bootbox.confirm({
            title: 'Cảnh báo',
            message: NTS.CauThongBaoXoa,
            className: 'bb-alternate-modal',
            buttons: {
                cancel: {
                    label: '<i class="fa fa-close"></i> Hủy bỏ',
                    className: "btn-danger btn-sm",
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Chấp nhận',
                    className: "btn-primary btn-sm",
                }
            },
            callback: function (result) {
                if (result) {

                    var result = NTS.getAjax('/Home/XoaTonGiao', { ma: ID });
                    if (result.split('_')[0] == "1") {
                        var GetAll = NTS.getAjax("/Home/GetAll", {});
                        if (GetAll.Err == false) {
                            table.setData(GetAll.Result);
                        }
                        else {
                            NTS.thongbaoloi(GetAll.Msg);
                        }
                        NTS.thongbao(result.split('_')[1]);
                    }
                    else {
                        NTS.thongbaoloi('Xóa dữ liệu thất bại!');
                    }
                }
            }
        });
    }
    else
        bootbox.dialog({
            title: "Cảnh báo",
            message: "Dữ liệu này đang được sử dụng. Không thể xoá, danh sách kèm theo:<br><table>" + result_ktxoa + "</table>",
            className: 'bb-alternate-modal',
            buttons: {
                cancel: {
                    label: '<i class="fa fa-close"></i> Đóng',
                    className: "btn-danger btn-sm",
                }
            },
        })

}
//=========================================================================================================
//==========================================table cấu hình bảng===================================================
//=========================================================================================================

var dateEditor = function (cell, onRendered, success, cancel) {
    input = document.createElement("input");
    input.setAttribute("type", "text");

    input.value = cell._cell.value;

    input.style.padding = "4px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";

    onRendered(function () {
        input.focus();
        input.style.height = "100%";
    });

    function onChange() {
        debugger;
        if (input.value != cell._cell.value) {
            debugger;
            //gửi lên server
            if (input.value == "") {
                input.value = cell.getRow().getData().TenMacDinh;
                doitencot(cell.getRow().getData().TenCot, input.value, cell.getRow().getData().CauhinhID);
            }
            else {
                doitencot(cell.getRow().getData().TenCot, input.value, cell.getRow().getData().CauhinhID);
            }
            success(input.value);
        } else {
            cancel();
        }
    }

    //submit new value on blur or change
    input.addEventListener("blur", onChange);

    //submit new value on enter
    //input.addEventListener("keydown", function (e) {
    //    if (e.keyCode == 13) {
    //        onChange();
    //    }

    //    if (e.keyCode == 27) {
    //        cancel();
    //    }
    //});

    return input;
};
var chaylandau = 1;
function loadcauhinhluoi() {
    var mangtt = [];
    var cot = []
    var mangcot = [{ title: "Thao tác", hozAlign: "center", formatter: btnThaoTac, width: 80, headerSort: false, frozen: true },];
    dodaichuoi = table_CauHinh.getData().length - 1;
    for (let i = 0; i <= dodaichuoi; i++) {
        debugger;
        if (chaylandau == 0) {
            var cotxoa = table_CauHinh.getData()[i].TenCot;
            table.deleteColumn("" + cotxoa + "");
            var IDCot = table_CauHinh.getData()[i].CauhinhID;
            var check = table_CauHinh.getData()[i].HienThi;
            NTS.getAjax('/Home/UpdateSTTCot', { ma: "" + IDCot + "", STT: "" + i + "", Hienthi: "" + check + "" });
        }
        if (table_CauHinh.getData()[i].HienThi) {
            var tencot = table_CauHinh.getData()[i].TenThayThe;
            debugger;
            switch (table_CauHinh.getData()[i].TenCot) {
                case "TonGiaoCode":
                    cot = [{ title: "" + tencot + "", field: "TonGiaoCode", hozAlign: "left", visible: true, width: 110 },];
                    break;
                case "TenTonGiao":
                    cot = [{ title: "" + tencot + "", field: "TenTonGiao", hozAlign: "left", width: 350, formatter: "textarea" },];
                    break;
                case "DienGiai":
                    cot = [{ title: "" + tencot + "", field: "DienGiai", hozAlign: "left", formatter: "textarea" },];
                    break;
                case "NgungSD":
                    cot = [{ title: "" + tencot + "", field: "NgungSD", hozAlign: "center", formatter: NgungSD, width: 120, headerSort: false },];
                    break;
                default:
            }
            debugger;
            mangcot = mangcot.concat(cot);
        }
    }
    if (chaylandau == 0) {
        NTS.thongbao("Cặp nhật cấu hình lưới thành công");
    }
    table.setColumns(mangcot);

    mangcot = [];
    mangtt = []

}
$('#btnXuatExcel').click(function () {
    var result = NTS.getAjax('/Home/XuatExcel', {});
    if (result.length > 0) {
        window.open(result);
    }
    else {
    }
});


//var 
//var 
//var 
var table_CauHinh = new Tabulator("#example-tableCauHinh", {
    //layout: "fitColumns", //fit columns to width of table (optional)
    //pagination: "local",
    //selectable: 1,
    //paginationSize: 50,
    //paginationSizeSelector: [50, 100, 150, 250, 500, true],
    movableRows: true,
    height: 300,// set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    //data: tabledata, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    layout: "fitDataFill",
    selectable: 1,
    paginationSize: 100,
    columns: [
        {
            rowHandle: true,
            formatter: "handle",
            headerSort: false,
            frozen: true,
            width: 30,
            minWidth: 30
        },
        { title: "Name", field: "TenMacDinh", width: 200 },
        { title: "Ẩn/Hiện", field: "HienThi", editor: true, formatter: "tickCross" },
        { title: "Tên thay thế", field: "TenThayThe", editor: dateEditor }
    ],
    locale: true,
    placeholder: "Không có dữ liệu",
    langs: TabulatorLangsVi
});
$('#btncauhinh').on('click', function () {
    tableData_CauHinh = NTS.getAjax("/Home/GetAllCauhinhBang", { Bang: bang, menu: menu });
    tableData_CauHinh = tableData_CauHinh.Result;
    setTimeout(function () {
        table_CauHinh.setData(tableData_CauHinh);
    }, 100);
    $('#mdcauhinh').modal('show');

});
$('#btnLuuCauHinh').on('click', function () {
    chaylandau = 0;
    loadcauhinhluoi();
    $('#mdcauhinh').modal('hide');
});

function doitencot(tencot, tencotmoi, CauhinhID) {
    var ten = tencotmoi;
    table.updateColumnDefinition("" + tencot + "", { title: "" + ten + "" });
    var result = NTS.getAjax('/Home/DoiTenCot', { ma: CauhinhID, Ten: tencotmoi });
    if (result) {
        NTS.thongbao("Đổi tên cột thành công");
    }
    else {
        NTS.thongbaoloi("Đổi tên cột thất bại");
    }
}