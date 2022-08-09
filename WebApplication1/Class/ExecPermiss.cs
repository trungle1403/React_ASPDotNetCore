namespace WebApplication1.Class
{
    public class ExecPermiss
    {
        private bool xem = false;
        public bool Xem
        {
            get { return xem; }
            set { xem = value; }
        }
        private bool them = false;
        public bool Them
        {
            get { return them; }
            set { them = value; }
        }
        private bool sua = false;
        public bool Sua
        {
            get { return sua; }
            set { sua = value; }
        }
        private bool xoa = false;
        public bool Xoa
        {
            get { return xoa; }
            set { xoa = value; }
        }
        private bool inan = false;
        public bool InAn
        {
            get { return inan; }
            set { inan = value; }
        }
        private bool nap = false;
        public bool Nap
        {
            get { return nap; }
            set { nap = value; }
        }
        private bool quyen1 = false;
        public bool Quyen1
        {
            get { return quyen1; }
            set { quyen1 = value; }
        }
        private bool quyen2 = false;
        public bool Quyen2
        {
            get { return quyen2; }
            set { quyen2 = value; }
        }
        private bool quyen3 = false;
        public bool Quyen3
        {
            get { return quyen3; }
            set { quyen3 = value; }
        }
        private bool err = false;
        public bool Err
        {
            get { return err; }
            set { err = value; }
        }
        private string errcode = string.Empty;
        public string ErrCode
        {
            get { return errcode; }
            set { errcode = value; }
        }
        private string errCatch = string.Empty;
        public string ErrCatch
        {
            get { return errCatch; }
            set { errCatch = value; }
        }
        private object result;
        public object Result
        {
            get { return result; }
            set { result = value; }
        }
        private string msg = string.Empty;
        public string Msg
        {
            get { return msg; }
            set { msg = value; }
        }
        private string logs = string.Empty;
        public string Logs
        {
            get { return logs; }
            set { logs = value; }
        }
        private bool redirect = false;
        public bool Redirect
        {
            get { return redirect; }
            set { redirect = value; }
        }
        private string redirecturl = "";
        public string RedirectUrl
        {
            get { return redirecturl; }
            set { redirecturl = value; }
        }
    }
}
