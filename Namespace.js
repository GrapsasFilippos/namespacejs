function ComGrapsasNamespace( ns ) {
  ns = ns.split( '/' );
  
  var i, p = window;
  for( i = 0; i < ns.length; i++ ) {
    if( !(ns[ i ] in p) )
      p[ ns[ i ] ] = {};
    p = p[ ns[ i ] ];
  }
  
  return p;
}
