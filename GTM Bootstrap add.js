<script>
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';
    link.integrity = "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
    link.crossOrigin = "anonymous";
	jQuery("head").append(link);

    var script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  	script.integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
    script.crossOrigin = "anonymous";
  	$('body').append(script);

    var script1 = document.createElement('script');
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js";
    script1.integrity = "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49";
    script1.crossOrigin = "anonymous";
  	$('body').append(script1);

    var script2 = document.createElement('script');
    script2.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js";
    script2.integrity = "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy";
    script2.crossOrigin = "anonymous";
  	$('body').append(script2);
</script>