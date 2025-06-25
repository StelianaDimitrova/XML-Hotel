<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:for-each select="/hotel/restaurant">
            Ресторант

            Капацитет:  <xsl:value-of select="seating_capacity"/>
            Работно време:  <xsl:value-of select="opening_hours"/>
            Разрешено ли е пушенето?   <xsl:value-of select="restaurant"/> <xsl:value-of select="@smoking_allowed"/>

        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>