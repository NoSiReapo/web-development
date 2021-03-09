PROGRAM SarahRevere(INPUT, OUTPUT);
USES dos;
BEGIN {SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  {Read Lanterns}
  IF GetEnv('QUERY_STRING') = ('lanterns=1')
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF GetEnv('QUERY_STRING') = ('lanterns=2')
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      IF GetEnv('QUERY_STRING') = ('lanterns=3')
      THEN
        WRITELN('The British are coming by air.')
      ELSE
         WRITELN('The North Church shows only ''''', GetEnv('QUERY_STRING'), '''''.')
END. {SarahRevere}