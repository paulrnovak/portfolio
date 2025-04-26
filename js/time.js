<script>

var d = new Date();
            var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById("demo").innerHTML = n;

</script>