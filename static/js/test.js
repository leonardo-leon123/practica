$(function()
{
    
    $('#translate').on('click', function(e)
    {
        e.preventDefault();
        var some_text =  document.getElementById('some-text').innerHTML;
        console.log(some_text)
        var languageVal = document.getElementById("select-language").value;
        var translateRequest = {
            'text': some_text,
            'to': languageVal
        }
        if(some_text !== "")
        {
            $.ajax({
                url: '/translate-text',
                method: 'POST',
                headers:
                {
                    'Content-Type':'application/json'
                },
                dataType: 'json',
                data: JSON.stringify(translateRequest),
                success: function(data)
                {
                    console.log(data)
                    for(var i=0; i< data.length; i++)
                    {
                        document.getElementById("some-text").innerHTML = data[i].translations[0].text;
                        document.getElementById("detected-language-result").textContent = data[i].detectedLanguage.language;
                        if(document.getElementById("detected-language-result").textContent !=="")
                        {
                            document.getElementById("detected-language").style.display = "block";
                        }
                        document.getElementById("confidence").textContent = data[i].detectedLanguage.score;
                    }
                }
            })
        }
    })
})
