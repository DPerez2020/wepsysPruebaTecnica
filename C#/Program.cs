using System;

namespace PruebaTecnicaWepSi
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Transformaciones(" Rapido veloz arca","snake->ltrim"));
            Console.ReadLine();
        }
        static string Transformaciones(string text,string transformaciones) {
            var transformacion=transformaciones.Split("->");
            string result = "";
            LTrim(text);
            foreach (var item in transformacion)
            {

                if (item=="snake")
                {
                    result=Snake(text);
                }
                //if (item=="upper")
                //{
                //    result = Upper(result);
                //}
                if (item=="ltrim")
                {
                    result = LTrim(result);
                }
            }
            return result;
        }
        static string Upper(string text)
        {
            var espaciosInicio = 0;
            var espaciosFinal = 0;
            for (int i = 0; i < text.Length; i++)
            {

            }
        }
        static string LTrim(string text) {
            //var charList = text.ToCharArray();
            //var result = "";
            //for (int i = 0; i < charList.Length; i++)
            //{
            //    if (charList[i] == ' ')
            //    {
            //        result += charList[i];
            //    }
            //}
            return text;
        }
        static string Snake(string text) {
            var textWithTrim=text.Trim();
            string result = "";
            foreach (var item in textWithTrim)
            {
                if (item == ' ')
                {
                    result += "_";
                }
                else {
                    result += item;
                }
            }
            return result;
        }
    }
}
