using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Linq;
using System.Collections;

namespace WebApplication1.Class
{
    public class DungChung
    {
        public static bool IsValidGUID(string str)
        {
            string pattern = @"^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$";
            return System.Text.RegularExpressions.Regex.IsMatch(str, pattern, System.Text.RegularExpressions.RegexOptions.Compiled);
        }
        public static Guid NormalizationGuid(object chuoi)
        {
            try
            {
                if (!String.IsNullOrWhiteSpace(chuoi.ToString()) && DungChung.IsValidGUID(chuoi.ToString()))
                    return Guid.Parse(chuoi.ToString());
                else
                    return default(Guid);
            }
            catch (Exception ex)
            {
                return default(Guid);
            }
        }
        public static object NormalizationString(object chuoi)
        {
            try
            {
                if (!String.IsNullOrWhiteSpace(chuoi.ToString()))
                    return chuoi.ToString();
                else
                    return DBNull.Value;
            }
            catch (Exception ex)
            {
                return DBNull.Value;
            }
        }

        public static string DauTachNhomTienTe()
        {
            return System.Globalization.NumberFormatInfo.CurrentInfo.CurrencyGroupSeparator;
        }
        public static string DauTachThapPhan()
        {
            return System.Globalization.NumberFormatInfo.CurrentInfo.CurrencyDecimalSeparator;
        }
        public static string DinhDangSoSQL(string value)
        {
            try
            {
                value += "";
                string _DauTachNhomTienTe = DauTachNhomTienTe();
                string _DauTachThapPhan = DauTachThapPhan();
                if (_DauTachThapPhan.Trim() == ".") // => _DauTachNhomTienTe == ","
                {
                    decimal.Parse(value.Replace(_DauTachNhomTienTe, ""));
                    if (string.IsNullOrEmpty(value))
                        return "0";
                    return value.Replace(_DauTachNhomTienTe, "");
                }
                else
                {
                    decimal.Parse(value.Replace(".", ""));
                    if (string.IsNullOrEmpty(value))
                        return "0";
                    return value.Replace(".", "");
                }
            }
            catch (Exception)
            {
                return "0";
            }
        }
        public static object NormalizationNumber(object chuoi)
        {
            try
            {
                return DinhDangSoSQL(chuoi.ToString());
            }
            catch (Exception ex)
            {
                return DBNull.Value;
            }
        }

        public static bool NormalizationBoolean(object chuoi)
        {
            try
            {
                if (chuoi == null)
                    return false;
                string[] arrCheck = { "1", "true" };
                if (Array.Exists(arrCheck, element => element == chuoi.ToString().ToLower()))
                    return true;
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static object NormalizationDateTime(object chuoi)
        {
            try
            {
                if (!String.IsNullOrWhiteSpace(chuoi.ToString()))
                {
                    string _chuoi = chuoi.ToString().Trim();
                    if (_chuoi.Length == 4)
                    {
                        return _chuoi + "-01-01";
                    }
                    else
                    {
                        string[] sa = _chuoi.Split('/');
                        return sa[2] + "-" + sa[1] + "-" + sa[0];
                    }
                }
                else
                    return DBNull.Value;
            }
            catch (Exception ex)
            {
                return DBNull.Value;
            }
        }
    }
}
