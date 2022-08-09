var loiKhiLuu = false; // kiem tra loi khi luu cac luoi HachToan, HachToanDongThoi, Thue
var dataHDF = ['maCPDauTuXDCTpr_sd', 'maNguonVonpr_sd', 'maLoaiKHVonpr_sd', 'maHinhThucNhanVonpr_sd'
    , 'maTinhTrangDApr_sd', 'maNghiepVupr_sd', 'maNhomMucChipr_sd', 'sttDuAnpr_sd', 'sttHMCTrinhpr_sd'
    , 'maCTMTQGpr_sd', 'maCTTWBoSungpr_sd', 'sttHopDongpr_sd', 'sttToChucpr_sd', 'maHoatDongpr_sd', 'maThongKepr_sd'
    , 'maPhiLePhipr_sd', 'maThueSuatpr_sd', 'maMauHoaDonpr_sd', 'maNhomHHDVpr_sd', 'maKhopr_nhan', 'maKhopr_sd'
    , 'sttVTHHpr_sd', 'maXuLyDCKhopr_sd'
    , 'sttTaiSanpr_sd', 'maPhongBanpr_sd'];
var dinhDangSo = function (cell, formatterParams, onRendered) {
    return formatNumber(cell.getValue() != undefined && cell.getValue() != null ? cell.getValue() : '').toString();
}
var dateEditor = function (cell, onRendered, success, cancel) {
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass the successfuly updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell

    //create and style input
    var cellValue = moment(cell.getValue(), "DD/MM/YYYY").format("YYYY-MM-DD"),
        input = document.createElement("input");

    input.setAttribute("type", "date");

    input.style.padding = "4px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";

    input.value = cellValue;

    onRendered(function () {
        input.focus();
        input.style.height = "100%";
    });

    function onChange() {
        if (input.value != cellValue) {
            success(moment(input.value, "YYYY-MM-DD").format("DD/MM/YYYY"));
        } else {
            cancel();
        }
    }

    //submit new value on blur or change
    input.addEventListener("blur", onChange);

    //submit new value on enter
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            onChange();
        }

        if (e.keyCode == 27) {
            cancel();
        }
    });

    return input;
};
var soChungTuGocEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soChungTuGocv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm  celledit");

    onRendered(function () {
        var input = $("#soChungTuGocv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('soChungTuGoc');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('soChungTuGoc');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
//Textbox
var dienGiaiEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "dienGiaiv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#dienGiaiv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('dienGiai');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('dienGiai');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var mauHoaDonEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "mauHoaDonv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#mauHoaDonv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('mauHoaDon');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('mauHoaDon');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var kyHieuHoaDonEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "kyHieuHoaDonv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#kyHieuHoaDonv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('kyHieuHoaDon');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('kyHieuHoaDon');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soHoaDonEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soHoaDonv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#soHoaDonv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('soHoaDon');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('soHoaDon');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maSoThueEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "maSoThuev2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#maSoThuev2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('maSoThue');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('maSoThue');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var diaChiEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "diaChiv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm celledit");
    onRendered(function () {
        var input = $("#diaChiv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('diaChi');
        });
        input.on('focusout', function (e) {
            success(input.val());
            luoi.redraw(true);
            luoi.scrollToColumn('diaChi');
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
//Nhập số
var soTienChuaQDEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienChuaQDv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienChuaQDv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienDuocGiaoEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienDuocGiaov2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienDuocGiaov2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT') != null && document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value == 'DieuChinhDuToan') {
                    var soTienDuocGiao = soTien;
                    var soTienDieuChinh = parseFloat(formatNumberJS(cell.getRow().getData().soTienDieuChinh));
                    cell.getRow().getCell('soTien').setValue(soTienDuocGiao + soTienDieuChinh);
                }
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT') != null && document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value == 'DieuChinhDuToan') {
                    var soTienDuocGiao = soTien;
                    var soTienDieuChinh = parseFloat(formatNumberJS(cell.getRow().getData().soTienDieuChinh));
                    cell.getRow().getCell('soTien').setValue(soTienDuocGiao + soTienDieuChinh);
                }
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienDieuChinhEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienDieuChinhv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienDieuChinhv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT') != null && document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value == 'DieuChinhDuToan') {
                    var soTienDuocGiao = soTien;
                    var soTienDuocGiao = parseFloat(formatNumberJS(cell.getRow().getData().soTienDuocGiao));
                    cell.getRow().getCell('soTien').setValue(soTienDuocGiao + soTienDuocGiao);
                }
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                if (document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT') != null && document.getElementById('ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value == 'DieuChinhDuToan') {
                    var soTienDuocGiao = soTien;
                    var soTienDuocGiao = parseFloat(formatNumberJS(cell.getRow().getData().soTienDuocGiao));
                    cell.getRow().getCell('soTien').setValue(soTienDuocGiao + soTienDuocGiao);
                }
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienThueChuaQDEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienThueChuaQDv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienThueChuaQDv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienThueEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienThuev2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienThuev2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienChuaThueChuaQDEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienChuaThueChuaQDv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienChuaThueChuaQDv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienChuaThueEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soTienChuaThuev2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soTienChuaThuev2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
//Nhập số VTHH
var soLuongEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soLuongv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soLuongv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soLuongTonEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soLuongTonv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soLuongTonv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var giaTriTonEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "giaTriTonv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#giaTriTonv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soLuongKKEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soLuongKKv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soLuongKKv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var giaTriKKEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "giaTriKKv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#giaTriKKv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soLuongLechEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "soLuongLechv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#soLuongLechv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var giaTriLechEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "giaTriLechv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#giaTriLechv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var thanhTienEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "thanhTienv2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#thanhTienv2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var donGiaEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    editor.setAttribute("id", "donGiav2");
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#donGiav2");
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var maCPDauTuXDCTpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maCPDauTuXDCTpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + 'maCPDauTuXDCTpr_sdv2';
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maCPDauTuXDCTpr_sd')
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCPDauTuXDCTpr_sd').setValue(chuoi);
                if (cell.getRow().getCell('dienGiai').getValue() == '' || cell.getRow().getCell('dienGiai').getValue() == undefined) cell.getRow().getCell('dienGiai').setValue(chuoiText);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCPDauTuXDCTpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCPDauTuXDCTpr_sd').setValue(chuoi);
                if (cell.getRow().getCell('dienGiai').getValue() == '' || cell.getRow().getCell('dienGiai').getValue() == undefined) cell.getRow().getCell('dienGiai').setValue(chuoiText);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCPDauTuXDCTpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCPDauTuXDCTpr_sd').setValue(chuoi);
                if (cell.getRow().getCell('dienGiai').getValue() == '' || cell.getRow().getCell('dienGiai').getValue() == undefined) cell.getRow().getCell('dienGiai').setValue(chuoiText);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCPDauTuXDCTpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maXuLyDCKhopr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maXuLyDCKhopr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maXuLyDCKhopr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maXuLyDCKhopr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maXuLyDCKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maXuLyDCKhopr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maXuLyDCKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maXuLyDCKhopr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maXuLyDCKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maXuLyDCKhopr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maNguonVonpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maNguonVonpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maNguonVonpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maNguonVonpr_sd')
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNguonVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNguonVonpr_sd');
            }, 1);
        });
        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNguonVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNguonVonpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNguonVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNguonVonpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var nienDoEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "nienDov2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('nienDo'),
            indexText: 0
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maLoaiKHVonpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maLoaiKHVonpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maLoaiKHVonpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maLoaiKHVonpr_sd')
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maLoaiKHVonpr_sd').setValue(chuoi);
                success(chuoiText);
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maLoaiKHVonpr_sd').setValue(chuoi);
                success(chuoiText);
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maLoaiKHVonpr_sd').setValue(chuoi);
                success(chuoiText);
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maTinhTrangDApr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maTinhTrangDApr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maTinhTrangDApr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maTinhTrangDApr_sd')
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maTinhTrangDApr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maTinhTrangDApr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maTinhTrangDApr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maTinhTrangDApr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maTinhTrangDApr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maTinhTrangDApr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTaiKhoanpr_NoEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "soTaiKhoanpr_No";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTaiKhoanpr_No'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTaiKhoanpr_CoEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var id = luoi.element.id + "soTaiKhoanpr_Co";
    var editor = document.createElement("select");
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTaiKhoanpr_Co'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maChuongpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var id = luoi.element.id + "maChuongpr_sdv2";
    var editor = document.createElement("select");
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maChuongpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maLoaiKhoanpr_loaiEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "maLoaiKhoanpr_loaiv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maLoaiKhoanpr_loai'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maLoaiKhoanpr_khoanEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "maLoaiKhoanpr_khoanv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maLoaiKhoanpr_khoan'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maMucNganSachpr_mucEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "maMucNganSachpr_mucv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maMucNganSachpr_muc'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maMucNganSachpr_tieumucEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "maMucNganSachpr_tieumucv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            ajaxUrl: '/Services/WebService.asmx/GetMucNS_TieuMuc',
            ajaxParam: cell.getRow().getData().maMucNganSachpr_muc,
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maNhomMucChipr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maLoaiKHVonpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maNhomMucChipr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maNhomMucChipr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomMucChipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomMucChipr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomMucChipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomMucChipr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomMucChipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomMucChipr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maHinhThucNhanVonpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maHinhThucNhanVonpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maHinhThucNhanVonpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maHinhThucNhanVonpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHinhThucNhanVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHinhThucNhanVonpr_sd');
            }, 1);
        });
        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHinhThucNhanVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHinhThucNhanVonpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHinhThucNhanVonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHinhThucNhanVonpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maNghiepVupr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maNghiepVupr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maNghiepVupr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maNghiepVupr_sd'),
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNghiepVupr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNghiepVupr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNghiepVupr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNghiepVupr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNghiepVupr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNghiepVupr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTKNHpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "soTKNHpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTKNHpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTKNHpr_dvtraEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "soTKNHpr_dvtrav2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTKNHpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('change', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.val();
            setTimeout(function () { success(chuoi); }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTienEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("input");
    var id = luoi.element.id + "soTien";
    editor.setAttribute("id", id);
    editor.setAttribute("type", "text");
    editor.setAttribute("class", "form-control input-sm number-format celledit");
    onRendered(function () {
        var input = $("#" + id);
        input.value(cellValue);
        input.focus();
        input.on('change', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('focusout', function (e) {
            try {
                var soTien = parseFloat(formatNumberJS(input.value()));
                success(soTien);
            } catch (e) {
                success(0);
            }
        });
        input.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maPhiLePhipr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maTinhTrangDApr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maPhiLePhipr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maPhiLePhipr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhiLePhipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhiLePhipr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhiLePhipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhiLePhipr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhiLePhipr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhiLePhipr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var sttDuAnpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttDuAnpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttDuAnpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('sttDuAnpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 1,
            indexText1: 2,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttDuAnpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttDuAnpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttDuAnpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttDuAnpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttDuAnpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttDuAnpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var sttHMCTrinhpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttHMCTrinhpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttHMCTrinhpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        console.log(cell.getRow().getData().maMucNganSachpr_muc);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            ajaxUrl: '/Services/WebService.asmx/GetHMCT',
            ajaxParam: cell.getRow().getData().hdf_sttDuAnpr_sd,
            columns: 1,
            indexValue: 0,
            indexText: 2,
            indexText1: 2,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttHMCTrinhpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHMCTrinhpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttHMCTrinhpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHMCTrinhpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttHMCTrinhpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHMCTrinhpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var maCTMTQGpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maCTMTQGpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maCTMTQGpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maCTMTQGpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTMTQGpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTMTQGpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTMTQGpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTMTQGpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTMTQGpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTMTQGpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maCTTWBoSungpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maCTTWBoSungpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maCTTWBoSungpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maCTTWBoSungpr_sd'),
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTTWBoSungpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTTWBoSungpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTTWBoSungpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTTWBoSungpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maCTTWBoSungpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maCTTWBoSungpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var sttToChucpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttToChucpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttToChucpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "200%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('sttToChucpr_sd'),
            columns: 2,
            indexValue: 2,
            indexText: 0,
            indexText1: 1,
            textChange: "text1"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttToChucpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttToChucpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttToChucpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var sttHopDongpr_sdEdit = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttHopDongpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttHopDongpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "150%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            ajaxUrl: '/Services/WebService.asmx/GetHD_PLHD',
            ajaxParam: cell.getRow().getData().hdf_sttDuAnpr_sd,
            columns: 2,
            indexValue: 0,
            indexText: 1,
            indexText1: 2,
            textChange: "text"
        });
        select_2.value(cellValue);

        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiKQ = ""; // sttToChucpr_sd
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                if (chuoi == "") {
                    //gán tổ chức là rỗng
                    chuoiKQ = "";
                } else {
                    var hopDong = chuoi.split(';');
                    var doiTuongHD = NTS.getAjax('json', '/Services/WebService.asmx/LayDoiTuongHopDong', { sttHopDongpr: hopDong[1] });
                    //gán đối tượng
                    if (!$.isEmptyObject(doiTuongHD)) {
                        if (doiTuongHD[0].nhaThau != "") chuoiKQ = doiTuongHD[0].nhaThau;
                        else chuoiKQ = "";
                    } else chuoiKQ = "";
                }
                var toChucLoc = JSON.parse(sessionStorage.getItem('sttToChucpr_sd')).filter(x => [x.sttToChucpr + ''].includes(chuoiKQ + ''));
                if (toChucLoc != null && !$.isEmptyObject(toChucLoc)) {
                    cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(toChucLoc[0].sttToChucpr);
                    cell.getRow().getCell('sttToChucpr_sd').setValue(toChucLoc[0].tenToChuc);
                }
                cell.getRow().getCell('hdf_sttHopDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHopDongpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiKQ = ""; // sttToChucpr_sd
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                if (chuoi == "") {
                    //gán tổ chức là rỗng
                    chuoiKQ = "";
                } else {
                    var hopDong = chuoi.split(';');
                    var doiTuongHD = NTS.getAjax('json', '/Services/WebService.asmx/LayDoiTuongHopDong', { sttHopDongpr: hopDong[1] });
                    //gán đối tượng
                    if (!$.isEmptyObject(doiTuongHD)) {
                        if (doiTuongHD[0].nhaThau != "") chuoiKQ = doiTuongHD[0].nhaThau;
                        else chuoiKQ = "";
                    } else chuoiKQ = "";
                }
                var toChucLoc = JSON.parse(sessionStorage.getItem('sttToChucpr_sd')).filter(x => [x.sttToChucpr + ''].includes(chuoiKQ + ''));
                if (toChucLoc != null && !$.isEmptyObject(toChucLoc)) {
                    cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(toChucLoc[0].sttToChucpr);
                    cell.getRow().getCell('sttToChucpr_sd').setValue(toChucLoc[0].tenToChuc);
                }
                cell.getRow().getCell('hdf_sttHopDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHopDongpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiKQ = ""; // sttToChucpr_sd
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                if (chuoi == "") {
                    //gán tổ chức là rỗng
                    chuoiKQ = "";
                } else {
                    var hopDong = chuoi.split(';');
                    var doiTuongHD = NTS.getAjax('json', '/Services/WebService.asmx/LayDoiTuongHopDong', { sttHopDongpr: hopDong[1] });
                    //gán đối tượng
                    if (!$.isEmptyObject(doiTuongHD)) {
                        if (doiTuongHD[0].nhaThau != "") chuoiKQ = doiTuongHD[0].nhaThau;
                        else chuoiKQ = "";
                    } else chuoiKQ = "";
                }
                var toChucLoc = JSON.parse(sessionStorage.getItem('sttToChucpr_sd')).filter(x => [x.sttToChucpr + ''].includes(chuoiKQ + ''));
                if (toChucLoc != null && !$.isEmptyObject(toChucLoc)) {
                    cell.getRow().getCell('hdf_sttToChucpr_sd').setValue(toChucLoc[0].sttToChucpr);;
                    cell.getRow().getCell('sttToChucpr_sd').setValue(toChucLoc[0].tenToChuc);
                }
                cell.getRow().getCell('hdf_sttHopDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttHopDongpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var maThongKepr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maThongKepr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maThongKepr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maThongKepr_sd'),
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThongKepr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThongKepr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThongKepr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThongKepr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThongKepr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThongKepr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maHoatDongpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maHoatDongpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maHoatDongpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maHoatDongpr_sd'),
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHoatDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHoatDongpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHoatDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHoatDongpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maHoatDongpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maHoatDongpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var maThueSuatpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maThueSuatpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maThueSuatpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maThueSuatpr_sd')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThueSuatpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThueSuatpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThueSuatpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThueSuatpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maThueSuatpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maThueSuatpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTaiKhoanpr_ThueEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getValue();
    var editor = document.createElement("select");
    var id = luoi.element.id + "soTaiKhoanpr_Thuev2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTaiKhoanpr_No'), // xài chung với tài khoản Nợ
            columns: 2,
            indexValue: 0,
            indexText: 0,
            indexText1: 1,
            textChange: "text"
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            setTimeout(function () {
                success(chuoi);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Thue');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            setTimeout(function () {
                success(chuoi);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Thue');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            setTimeout(function () {
                success(chuoi);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Thue');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maMauHoaDonpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maMauHoaDonpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maMauHoaDonpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maMauHoaDonpr_sd')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('mauHoaDon').setValue('');
                cell.getRow().getCell('kyHieuHoaDon').setValue('');
                if (chuoi != "") {
                    var data = NTS.getAjax_v1('/View/danhmuc/MauHoaDon.aspx/GetID', { data: chuoi });
                    if (!data.Err) {
                        cell.getRow().getCell('mauHoaDon').setValue(data.Result.Table[0].mauHoaDon);
                        cell.getRow().getCell('kyHieuHoaDon').setValue(data.Result.Table[0].kyHieu);
                    }
                }
                cell.getRow().getCell('hdf_maMauHoaDonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maMauHoaDonpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('mauHoaDon').setValue('');
                cell.getRow().getCell('kyHieuHoaDon').setValue('');
                if (chuoi != "") {
                    var data = NTS.getAjax_v1('/View/danhmuc/MauHoaDon.aspx/GetID', { data: chuoi });
                    if (!data.Err) {
                        cell.getRow().getCell('mauHoaDon').setValue(data.Result.Table[0].mauHoaDon);
                        cell.getRow().getCell('kyHieuHoaDon').setValue(data.Result.Table[0].kyHieu);
                    }
                }
                cell.getRow().getCell('hdf_maMauHoaDonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maMauHoaDonpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('mauHoaDon').setValue('');
                cell.getRow().getCell('kyHieuHoaDon').setValue('');
                if (chuoi != "") {
                    var data = NTS.getAjax_v1('/View/danhmuc/MauHoaDon.aspx/GetID', { data: chuoi });
                    if (!data.Err) {
                        cell.getRow().getCell('mauHoaDon').setValue(data.Result.Table[0].mauHoaDon);
                        cell.getRow().getCell('kyHieuHoaDon').setValue(data.Result.Table[0].kyHieu);
                    }
                }
                cell.getRow().getCell('hdf_maMauHoaDonpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maMauHoaDonpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maNhomHHDVpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maNhomHHDVpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maNhomHHDVpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "100%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maNhomHHDVpr_sd')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomHHDVpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomHHDVpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomHHDVpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomHHDVpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maNhomHHDVpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maNhomHHDVpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var sttVTHHpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttVTHHpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttVTHHpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    //editor.setAttribute("add-new", "true");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            ajaxUrl: '/Services/WebService.asmx/GetVatTuHH',
            columns: 2,
            indexValue: 0,
            indexText: 1,
            indexText1: 2,
            textChange: "text1"
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttVTHHpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttVTHHpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttVTHHpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttVTHHpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttVTHHpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttVTHHpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maKhopr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maKhopr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maKhopr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maKhopr_sd')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maKhopr_nhanEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maKhopr_nhan;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maKhopr_nhanv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('maKhopr_sd')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_nhan').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_nhan');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_nhan').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_nhan');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maKhopr_nhan').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maKhopr_nhan');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var soTaiKhoanpr_KhoEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_soTaiKhoanpr_Kho;
    var editor = document.createElement("select");
    var id = luoi.element.id + "soTaiKhoanpr_Khov2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem('soTaiKhoanpr_No')
        });
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_soTaiKhoanpr_Kho').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Kho');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_soTaiKhoanpr_Kho').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Kho');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_soTaiKhoanpr_Kho').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('soTaiKhoanpr_Kho');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var sttTaiSanpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_sttTaiSanpr_sd;
    var editor = document.createElement("select");
    var id = luoi.element.id + "sttTaiSanpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        //--------------------------
        var url = "";
        if ($('#ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value() == "PhieuChi_MuaCCDCTM" || $('#ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value() == "PhieuChi_MuaCCDCTG" ||
            $('#ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value() == "PhieuChi_MuaCCDCCKKB" || $('#ctl00_ContentPlaceHolder1_hdf_MaLoaiCT').value() == "CCDC_MSChuaThanhToan")
            url = '/Services/WebService.asmx/GetCCDC';
        else
            url = '/Services/WebService.asmx/GetTaiSan';
        NTS.loadDataCombo_v1({
            name: '#' + id,
            ajaxUrl: url,
            columns: 2,
            indexValue: 0,
            indexText: 1,
            indexText1: 2,
            textChange: "text1"
        });
        //--------------------------
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttTaiSanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttTaiSanpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttTaiSanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttTaiSanpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_sttTaiSanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('sttTaiSanpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}
var maPhongBanpr_sdEditor = function (cell, onRendered, success, cancel, editorParams) {
    var luoi = this.table;
    if (KiemTraGhiSoTrenLuoi()) { cancel(); return; }
    var cellValue = cell.getRow().getData().hdf_maKhopr_nhan;
    var editor = document.createElement("select");
    var id = luoi.element.id + "maPhongBanpr_sdv2";
    editor.setAttribute("id", id);
    editor.setAttribute("menu-width", "180%");
    editor.setAttribute("class", "form-control input-sm");
    onRendered(function () {
        var select_2 = $("#" + id);
        //--------------------------
        NTS.loadDataCombo_v1({
            name: '#' + id,
            source: sessionStorage.getItem("maPhongBanpr_sd"),
            ajaxParam: '',
        });
        //--------------------------
        select_2.value(cellValue);
        select_2.on('select2:select', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhongBanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhongBanpr_sd');
            }, 1);
        });

        select_2.on('change', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhongBanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhongBanpr_sd');
            }, 1);
        });
        select_2.on('select2:closing', function (e) {
            var chuoi = select_2.value();
            var chuoiText = $('#select2-' + id + '-container').text();
            setTimeout(function () {
                cell.getRow().getCell('hdf_maPhongBanpr_sd').setValue(chuoi);
                success(chuoiText);
                luoi.redraw(true);
                luoi.scrollToColumn('maPhongBanpr_sd');
            }, 1);
        });
        select_2.on('blur', function (e) {
            cancel();
        });
    });
    return editor;
}

var dataColoumns = [
    { title: "VTHH", field: "sttVTHHpr_sd", width: 250, visible: true, formatter: "textarea", editor: sttVTHHpr_sdEditor },
    { title: "<span class='lblsttTaiSanpr_sd'>TSCĐ</span>", field: "sttTaiSanpr_sd", width: 250, visible: true, formatter: "textarea", editor: sttTaiSanpr_sdEditor },
    { title: "Số CT gốc", field: "soChungTuGoc", width: 140, visible: true, formatter: "textarea", editor: soChungTuGocEditor },
    { title: "Ngày CT gốc", field: "ngayChungTuGoc", width: 140, visible: true, editor: dateEditor },
    { title: "Cơ cấu vốn", field: "maCPDauTuXDCTpr_sd", width: 250, visible: true, formatter: "textarea", editor: maCPDauTuXDCTpr_sdEditor },
    { title: "Diễn giải", field: "dienGiai", minWidth: 300, visible: true, formatter: "textarea", editor: dienGiaiEditor },
    { title: "Kho", field: "maKhopr_sd", width: 200, visible: true, formatter: "textarea", editor: maKhopr_sdEditor },
    { title: "Đến kho", field: "maKhopr_nhan", width: 200, visible: true, formatter: "textarea", editor: maKhopr_nhanEditor },
    { title: "Tài khoản kho", field: "soTaiKhoanpr_Kho", width: 200, visible: true, editor: soTaiKhoanpr_KhoEditor },
    { title: "Phòng/ban", field: "maPhongBanpr_sd", width: 200, visible: true, formatter: "textarea", editor: maPhongBanpr_sdEditor },//
    { title: "TK nợ", field: "soTaiKhoanpr_No", width: 120, visible: true, editor: soTaiKhoanpr_NoEditor },
    { title: "TK có", field: "soTaiKhoanpr_Co", width: 120, visible: true, editor: soTaiKhoanpr_CoEditor },

    //THUE
    { title: "Thuế suất", field: "maThueSuatpr_sd", width: 120, visible: true, editor: maThueSuatpr_sdEditor },
    { title: "Số lượng", field: "soLuong", width: 120, visible: true, formatter: dinhDangSo, editor: soLuongEditor },
    { title: "Số lượng tồn", field: "soLuongTon", width: 120, visible: true, formatter: dinhDangSo, editor: soLuongTonEditor },
    { title: "Giá trị tồn", field: "giaTriTon", width: 120, visible: true, formatter: dinhDangSo, editor: giaTriTonEditor },
    { title: "SL kiểm kê", field: "soLuongKK", width: 180, visible: true, formatter: dinhDangSo, editor: soLuongKKEditor },
    { title: "Giá trị kiểm kê", field: "giaTriKK", width: 180, visible: true, formatter: dinhDangSo, editor: giaTriKKEditor },
    { title: "SL chênh lệch", field: "soLuongLech", width: 180, visible: true, formatter: dinhDangSo, editor: soLuongLechEditor },
    { title: "Giá trị chênh lệch", field: "giaTriLech", width: 180, visible: true, formatter: dinhDangSo, editor: giaTriLechEditor },
    { title: "Đơn giá", field: "donGia", width: 180, visible: true, formatter: dinhDangSo, editor: donGiaEditor },
    { title: "Thành tiền", field: "thanhTien", width: 180, visible: true, formatter: dinhDangSo, editor: thanhTienEditor },
    { title: "<span class='lblsoTienThueChuaQD'>Số tiền chưa QĐ</span>", field: "soTienThueChuaQD", width: 180, visible: true, formatter: dinhDangSo, editor: soTienThueChuaQDEditor, hozAlign: "right" },
    { title: "<span class='lblsoTienThue'>Tiền thuế</span>", field: "soTienThue", width: 160, visible: true, formatter: dinhDangSo, editor: soTienThueEditor },
    { title: "<span class='lblsoTienChuaThueChuaQD'>Tiền chưa thuế chưa QĐ</span>", field: "soTienChuaThueChuaQD", width: 160, visible: true, formatter: dinhDangSo, editor: soTienChuaThueChuaQDEditor },
    { title: "<span class='lblsoTienChuaThue'>Tiền chưa thuế</span>", field: "soTienChuaThue", width: 160, visible: true, formatter: dinhDangSo, editor: soTienChuaThueEditor },
    //soTien => Giá tính thuế
    { title: "<span class='lblsoTienChuaQD'>Số tiền chưa QĐ</span>", field: "soTienChuaQD", width: 160, visible: true, formatter: dinhDangSo, editor: soTienChuaQDEditor, hozAlign: "right" },
    { title: "Số tiền được giao", field: "soTienDuocGiao", width: 160, visible: true, formatter: dinhDangSo, editor: soTienDuocGiaoEditor, hozAlign: "right" },
    { title: "Số tiền điều chỉnh", field: "soTienDieuChinh", width: 160, visible: true, formatter: dinhDangSo, editor: soTienDieuChinhEditor, hozAlign: "right" },
    { title: "<span class='lblsoTien'>Số tiền chưa QĐ</span>", field: "soTien", width: 160, visible: true, formatter: dinhDangSo, editor: soTienEditor, hozAlign: "right" },
    //hoaDon
    { title: "Loại hóa đơn", field: "maMauHoaDonpr_sd", width: 150, visible: true, formatter: "textarea", editor: maMauHoaDonpr_sdEditor }, // Chưa
    { title: "Mẫu hóa đơn", field: "mauHoaDon", width: 150, visible: true, formatter: "textarea", editor: mauHoaDonEditor }, //R
    { title: "Ngày hóa đơn", field: "ngayHoaDon", width: 140, visible: true, formatter: "textarea", editor: dateEditor }, //R
    { title: "Ký hiệu", field: "kyHieuHoaDon", width: 150, visible: true, formatter: "textarea", editor: kyHieuHoaDonEditor }, //R
    { title: "Số hóa đơn", field: "soHoaDon", width: 150, visible: true, formatter: "textarea", editor: soHoaDonEditor }, //R
    { title: "Nhóm HH - DV", field: "maNhomHHDVpr_sd", width: 250, visible: true, formatter: "textarea", editor: maNhomHHDVpr_sdEditor }, //R

    { title: "Nguồn vốn", field: "maNguonVonpr_sd", visible: true, width: 250, formatter: "textarea", editor: maNguonVonpr_sdEditor },
    { title: "Năm NS", field: "nienDo", width: 100, visible: true, editor: nienDoEditor },
    { title: "Loại KHV", field: "maLoaiKHVonpr_sd", visible: true, width: 100, formatter: "textarea", editor: maLoaiKHVonpr_sdEdit },
    { title: "Giai đoạn KHV", field: "maTinhTrangDApr_sd", visible: true, width: 250, formatter: "textarea", editor: maTinhTrangDApr_sdEdit },
    { title: "Chương", field: "maChuongpr_sd", width: 100, visible: true, editor: maChuongpr_sdEdit },
    { title: "Loại", field: "maLoaiKhoanpr_loai", width: 100, visible: true, editor: maLoaiKhoanpr_loaiEdit },
    { title: "Khoản", field: "maLoaiKhoanpr_khoan", width: 100, visible: true, editor: maLoaiKhoanpr_khoanEdit },
    { title: "Nhóm mục chi", field: "maNhomMucChipr_sd", width: 180, visible: true, editor: maNhomMucChipr_sdEdit },
    { title: "Mục", field: "maMucNganSachpr_muc", width: 100, visible: true, editor: maMucNganSachpr_mucEdit },
    { title: "Tiểu mục", field: "maMucNganSachpr_tieumuc", width: 120, visible: true, editor: maMucNganSachpr_tieumucEdit },
    { title: "Nghiệp vụ", field: "maNghiepVupr_sd", width: 200, formatter: "textarea", visible: true, editor: maNghiepVupr_sdEdit },
    { title: "Cấp phát", field: "maHinhThucNhanVonpr_sd", width: 200, visible: true, editor: maHinhThucNhanVonpr_sdEdit },
    { title: "Dự án", field: "sttDuAnpr_sd", width: 300, visible: true, formatter: "textarea", editor: sttDuAnpr_sdEdit },
    { title: "HMCT", field: "sttHMCTrinhpr_sd", width: 280, visible: true, formatter: "textarea", editor: sttHMCTrinhpr_sdEdit },
    { title: "CTMTQG", field: "maCTMTQGpr_sd", width: 250, visible: true, formatter: "textarea", editor: maCTMTQGpr_sdEdit },
    { title: "CTTWBS", field: "maCTTWBoSungpr_sd", width: 250, visible: true, formatter: "textarea", editor: maCTTWBoSungpr_sdEdit },
    { title: "Hợp đồng", field: "sttHopDongpr_sd", width: 250, visible: true, formatter: "textarea", editor: sttHopDongpr_sdEdit },
    { title: "Đối tượng", field: "sttToChucpr_sd", width: 300, visible: true, formatter: "textarea", editor: sttToChucpr_sdEdit },
    { title: "Tài khoản NH - KB", field: "soTKNHpr_sd", width: 250, visible: true, formatter: "textarea", editor: soTKNHpr_sdEditor },
    { title: "Đến tài khoản NH - KB", field: "soTKNHpr_dvtra", width: 250, visible: true, formatter: "textarea", editor: soTKNHpr_dvtraEditor },
    { title: "Hoạt động", field: "maHoatDongpr_sd", width: 250, visible: true, formatter: "textarea", editor: maHoatDongpr_sdEditor },
    { title: "Thống kê", field: "maThongKepr_sd", width: 250, visible: true, formatter: "textarea", editor: maThongKepr_sdEditor },
    { title: "Thu phí, lệ phí", field: "maPhiLePhipr_sd", width: 250, visible: true, formatter: "textarea", editor: maPhiLePhipr_sdEditor },

    { title: "TK Thuế", field: "soTaiKhoanpr_Thue", width: 250, visible: true, editor: soTaiKhoanpr_ThueEditor }, //R
    { title: "Xử lý", field: "maXuLyDCKhopr_sd", width: 200, visible: true, editor: maXuLyDCKhopr_sdEditor },
    //sttToChucpr_sd => Tổ chức, cá nhân
    { title: "Mã số thuế", field: "maSoThue", width: 180, visible: true, formatter: "textarea", editor: maSoThueEditor },//R
    { title: "Địa chỉ", field: "diaChi", width: 250, visible: true, formatter: "textarea", editor: diaChiEditor },//R
    // các cột ẩn
    { title: "sttCTChiCTpr", field: "sttCTChiCTpr", visible: false },
    { title: "sttCTChipr_sd", field: "sttCTChipr_sd", visible: false },
    { title: "sttHachToan_Thuepr", field: "sttHachToan_Thuepr", visible: false },
    { title: "hdf_maCPDauTuXDCTpr_sd", field: "hdf_maCPDauTuXDCTpr_sd", visible: false },
    { title: "hdf_maNguonVonpr_sd", field: "hdf_maNguonVonpr_sd", visible: false },
    { title: "hdf_maLoaiKHVonpr_sd", field: "hdf_maLoaiKHVonpr_sd", visible: false },
    { title: "hdf_maTinhTrangDApr_sd", field: "hdf_maTinhTrangDApr_sd", visible: false },
    { title: "hdf_maNghiepVupr_sd", field: "hdf_maNghiepVupr_sd", visible: false },
    { title: "hdf_sttDuAnpr_sd", field: "hdf_sttDuAnpr_sd", visible: false },
    { title: "hdf_sttHMCTrinhpr_sd", field: "hdf_sttHMCTrinhpr_sd", visible: false },
    { title: "hdf_maNhomMucChipr_sd", field: "hdf_maNhomMucChipr_sd", visible: false },
    { title: "hdf_maHinhThucNhanVonpr_sd", field: "hdf_maHinhThucNhanVonpr_sd", visible: false },
    { title: "hdf_maCTMTQGpr_sd", field: "hdf_maCTMTQGpr_sd", visible: false },
    { title: "hdf_maCTTWBoSungpr_sd", field: "hdf_maCTTWBoSungpr_sd", visible: false },
    { title: "hdf_sttHopDongpr_sd", field: "hdf_sttHopDongpr_sd", visible: false },
    { title: "hdf_sttToChucpr_sd", field: "hdf_sttToChucpr_sd", visible: false },
    { title: "hdf_maHoatDongpr_sd", field: "hdf_maHoatDongpr_sd", visible: false },
    { title: "hdf_maThongKepr_sd", field: "hdf_maThongKepr_sd", visible: false },
    { title: "hdf_maPhiLePhipr_sd", field: "hdf_maPhiLePhipr_sd", visible: false },
    { title: "hdf_maNhomHHDVpr_sd", field: "hdf_maNhomHHDVpr_sd", visible: false },
    { title: "hdf_maThueSuatpr_sd", field: "hdf_maThueSuatpr_sd", visible: false },
    { title: "hdf_maMauHoaDonpr_sd", field: "hdf_maMauHoaDonpr_sd", visible: false },

    // VTHH
    { title: "sttHachToan_VTHHpr", field: "sttHachToan_VTHHpr", visible: false },
    { title: "hdf_sttVTHHpr_sd", field: "hdf_sttVTHHpr_sd", visible: false },
    { title: "hdf_maKhopr_sd", field: "hdf_maKhopr_sd", visible: false },
    { title: "hdf_maKhopr_nhan", field: "hdf_maKhopr_nhan", visible: false },
    { title: "hdf_soTaiKhoanpr_Kho", field: "hdf_soTaiKhoanpr_Kho", visible: false },

    //TSCD
    { title: "sttHachToan_TSCDpr", field: "sttHachToan_TSCDpr", visible: false },
    { title: "hdf_sttTaiSanpr_sd", field: "hdf_sttTaiSanpr_sd", visible: false },
    { title: "hdf_maPhongBanpr_sd", field: "hdf_maPhongBanpr_sd", visible: false },
];